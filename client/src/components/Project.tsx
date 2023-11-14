/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  Radio,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowBackIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Modal,
  RadioGroup,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

function Projects() {
  const [projectName, setProjectName] = useState('');
  const [projectPeople, setProjectPeople] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectURL, setProjectURL] = useState('');
  const [projectType, setProjectType] = useState('');
  const [projectsList, setProjectsList] = useState([
    { id: 1, name: 'Project 1', description: 'This is the first project' },
    { id: 2, name: 'Project 2', description: 'This is the second project' },
    { id: 3, name: 'Project 3', description: 'This is the third project' },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  // Delete project related state and functions
  const [projectToDelete, setProjectToDelete] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulate loading for 1.5 seconds
  }, []);

  const handleCreateProject = () => {
    if (projectName.trim() !== '') {
      const newProject = {
        id: Date.now(),
        name: projectName,
        people: projectPeople,
        description: projectDescription,
        url: projectURL,
        type: projectType || 'project', // Use the provided projectType or default to 'project'
      };

      // Update the projectsList
      const updatedProjectsList = [...projectsList, newProject];
      setProjectsList(updatedProjectsList);
      setProjectName('');

      // Store the updated projects list in localStorage
      localStorage.setItem('projectsList', JSON.stringify(updatedProjectsList));

      // Notify the user about the new project
      const notification = {
        id: Date.now(),
        text: `A new project - "${projectName}" was created!`,
        type: 'project', // Specify the type as 'project'
      };

      // Store the notification in localStorage
      localStorage.setItem('projectNotification', JSON.stringify(notification));
    }
  };

  // useEffect to load projects from localStorage on component mount
  useEffect(() => {
    const storedProjects = localStorage.getItem('projectsList');
    if (storedProjects) {
      setProjectsList(JSON.parse(storedProjects));
      setIsLoading(false);
    }
  }, []);

  // New state for the delete modal
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProjectToDelete, setSelectedProjectToDelete] = useState(null);

  // Function to open the delete modal
  const openDeleteModal = (projectId) => {
    setIsDeleteModalOpen(true);
    setSelectedProjectToDelete(projectId);
  };

  // Function to close the delete modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProjectToDelete(null);
  };

  // Function to handle project deletion
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
            <Stack spacing={4}>
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
              <FormControl id="projectPeople">
                <FormLabel>Add People to Group (Optional)</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter people to add"
                  value={projectPeople}
                  onChange={(e) => setProjectPeople(e.target.value)}
                />
              </FormControl>
              <FormControl id="projectDescription">
                <FormLabel>Description (Optional)</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </FormControl>
              <FormControl id="projectURL">
                <FormLabel>URL (Optional)</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project URL"
                  value={projectURL}
                  onChange={(e) => setProjectURL(e.target.value)}
                />
              </FormControl>
              <FormControl id="projectType">
                <FormLabel>Project Type (Optional)</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                />
              </FormControl>
              <Button
                colorScheme="blue"
                onClick={handleCreateProject}
                isDisabled={!projectName.trim()}
              >
                Create Project
              </Button>
            </Stack>
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
                  
                  <Link key={project.id} to="/kanban">
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
