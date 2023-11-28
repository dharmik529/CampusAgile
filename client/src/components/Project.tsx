/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  useColorModeValue,
  Stack,
  IconButton,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Projects() {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectsList, setProjectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProjectToDelete, setSelectedProjectToDelete] = useState(null);

  useEffect(() => {
    // Fetch projects from the backend API
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/project/findAll');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjectsList(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
        setIsLoading(false);
      }
    };

    // Call the fetchProjects function
    fetchProjects();
  }, []);


  const handleCreateProject = async () => {
    if (projectName.trim() !== '') {
      try {
        const response = await fetch('http://localhost:3000/project/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: projectName,
            description: projectDescription,
            priority: null,
            status: null,
            createdByUser: null,
          }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to create project');
        }
  
        // Assuming the response is a string, you may need to adjust this based on your actual response structure
        const message = await response.text();
  
        // Log the response message or handle it as needed
        console.log(message);
  
        // Update the projectsList using the callback version of setProjectsList
        setProjectsList((prevProjectsList) => {
          const newProject = { id: prevProjectsList.length + 1, name: projectName, description: projectDescription };
          return [...prevProjectsList, newProject];
        });
    
        setProjectName('');
  
        // Notify the user about the new project
        // ... (your notification logic)
  
      } catch (error) {
        console.error('Error creating project:', error.message);
        // Handle error (e.g., show an error message to the user)
      }
    }
    
  };

  const openDeleteModal = (projectId) => {
    setIsDeleteModalOpen(true);
    setSelectedProjectToDelete(projectId);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProjectToDelete(null);
  };

  const handleDeleteProject = () => {
    if (selectedProjectToDelete !== null) {
      const updatedProjectsList = projectsList.filter(
        (project) => project.id !== selectedProjectToDelete,
      );

      setProjectsList(updatedProjectsList);

      // Store the updated projects list in localStorage
      localStorage.setItem('projectsList', JSON.stringify(updatedProjectsList));

      // Close the delete modal after deletion
      closeDeleteModal();
    }
  };

  return (
    <Center minH={'100vh'} bg={useColorModeValue('gray.100', 'gray.900')}>
      <Box
        w="100%"
        maxW="container.lg"
        display="flex"
        justifyContent="space-between"
        p={4}
        marginX="auto"
        marginTop="4%"
        marginBottom="4%"
      >
        {/* Create Project Form (Left) */}
        <Box w="48%">
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <form>
              <Heading fontSize={'2xl'}>Create a Project</Heading>
              <FormControl id="projectName">
                <FormLabel>Project Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </FormControl>
              <FormControl id="projectDescription">
                <FormLabel>Project Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="blue"
                onClick={handleCreateProject}
                isDisabled={!projectName.trim()}
              >
                Create Project
              </Button>
            </form>
          </Box>
        </Box>

        {/* Existing Projects Cards (Right) */}
        <Box w="48%">
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Existing Projects</Heading>
            {isLoading ? (
              <Text>Loading projects...</Text>
            ) : (
              projectsList.map((project) => (
                <React.Fragment key={project.id}>
                  <Link to={`/kanban/${project.id}`}>
                    <Box
                      bg={useColorModeValue('white', 'gray.700')}
                      boxShadow={'md'}
                      p={4}
                      rounded="lg"
                    >
                      <Text fontSize="lg" fontWeight="bold">
                        {project.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {project.description}
                      </Text>
                    </Box>
                  </Link>
                  <Button
                    backgroundColor="#E6676B"
                    size="sm"
                    width="100px"
                    marginLeft="77%"
                    alignItems="center"
                    mt={2}
                    onClick={() => openDeleteModal(project.id)}
                  >
                    Delete
                  </Button>
                </React.Fragment>
              ))
            )}
          </Stack>
        </Box>

        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Delete Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {projectsList.map((project) => (
                <Box key={project.id} mb={2}>
                  {project.id === selectedProjectToDelete ? (
                    <Text fontWeight="bold">{project.name}</Text>
                  ) : (
                    <Text>{project.name}</Text>
                  )}
                </Box>
              ))}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" onClick={handleDeleteProject} marginRight="2%">
                Delete
              </Button>
              <Button onClick={closeDeleteModal}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <IconButton
        as={Link}
        to="/home"
        bottom="20px"
        right="20px"
        icon={<ArrowBackIcon />}
        zIndex="999"
        aria-label="Home"
        size="md"
        colorScheme="blue"
        mt={4}
        position="fixed"
      />
    </Center>
  );
}

export default Projects;
