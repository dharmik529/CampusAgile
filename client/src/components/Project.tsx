/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Select,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Projects() {
  // Inside the Projects functional component
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectsList, setProjectsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));
  console.log('Retrieved User Email:', userEmail);

  const [statusOptions, setStatusOptions] = useState([]);
  const [priorityOptions, setPriorityOptions] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProjectToDelete, setSelectedProjectToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedProjects = localStorage.getItem('projectsList');

    const fetchProjects = async () => {
      try {
        // Fetch projects
        const projectsResponse = await fetch(
          'http://localhost:3000/project/findAll',
        );
        if (!projectsResponse.ok) {
          throw new Error('Failed to fetch projects');
        }
        const projectsData = await projectsResponse.json();
        console.log('Fetched Projects:', projectsData);

        // Set localStorage if there is actual project data
        if (projectsData.length > 0) {
          localStorage.setItem('projectsList', JSON.stringify(projectsData));
        }

        setProjectsList(projectsData);

        // Fetch status options
        const statusResponse = await fetch(
          'http://localhost:3000/project/statusOptions',
        );
        if (!statusResponse.ok) {
          throw new Error('Failed to fetch status options');
        }
        const statusData = await statusResponse.json();
        setStatusOptions(statusData);

        // Fetch priority options
        const priorityResponse = await fetch(
          'http://localhost:3000/project/priorityOptions',
        );
        if (!priorityResponse.ok) {
          throw new Error('Failed to fetch priority options');
        }
        const priorityData = await priorityResponse.json();
        setPriorityOptions(priorityData);

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error.message);
        setIsLoading(false);
      }
    };

    if (storedProjects) {
      try {
        setProjectsList(JSON.parse(storedProjects));
        setIsLoading(false);
      } catch (error) {
        console.error(
          'Error parsing projects from local storage:',
          error.message,
        );
        // Handle the error as needed
        // You may choose to fetch projects again in case of parsing error
        fetchProjects();
      }
    } else {
      fetchProjects();
    }
  }, []);

  const handleCreateProject = async () => {
    if (projectName.trim() !== '') {
      try {
        const priorityText = getPriorityText(selectedPriority);
        const statusText = getStatusText(selectedStatus);
        const response = await fetch('http://localhost:3000/project/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: projectName,
            description: projectDescription,
            priority: priorityText,
            status: statusText, 
            createdByUser: null,
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to create project');
        }

        const message = await response.text();
        console.log(message);

        // Fetch the updated list of projects
        const fetchUpdatedProjects = async () => {
          try {
            const projectsResponse = await fetch(
              'http://localhost:3000/project/findAll',
            );
            if (!projectsResponse.ok) {
              throw new Error('Failed to fetch projects');
            }
            const updatedProjectsData = await projectsResponse.json();
            console.log('Fetched Updated Projects:', updatedProjectsData);

            localStorage.setItem(
              'projectsList',
              JSON.stringify(updatedProjectsData),
            );
            setProjectsList(updatedProjectsData);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching updated projects:', error.message);
            setIsLoading(false);
          }
        };

        fetchUpdatedProjects(); // Fetch the updated projects after creating a new one

        setProjectName('');
        setProjectDescription('');
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
      localStorage.setItem('projectsList', JSON.stringify(updatedProjectsList));
      closeDeleteModal();
    }
  };

  // Function to map selected status option to text
const getStatusText = (selectedStatus) => {
  switch (selectedStatus) {
    case 'Active':
      return 'Open';
    case 'In Progress':
      return 'InProgress';
    case 'Completed':
      return 'Done';
    case 'On Hold':
      return 'OnHold';
    default:
      return '';
  }
};

// Function to map selected priority option to text
const getPriorityText = (selectedPriority) => {
  switch (selectedPriority) {
    case 'Lowest':
      return 'Lowest';
    case 'Low':
      return 'Low';
    case 'Medium':
      return 'Medium';
    case 'High':
      return 'High';
    case 'Highest':
      return 'Highest';
    default:
      return '';
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
        marginTop="5%"
        marginBottom="4%"
      >
        <Box w="48%">
          <Box
            rounded="lg"
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow="lg"
            p={8}
          >
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <Heading fontSize="2xl" mb={4}>
                Create a Project
              </Heading>
              <FormControl id="projectName" mb={4}>
                <FormLabel>Project Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              </FormControl>
              <FormControl id="projectDescription" mb={4}>
                <FormLabel>Project Description</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter project description"
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                />
              </FormControl>

              <FormControl id="status" mb={4}>
                <FormLabel>Status</FormLabel>
                <Select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  placeholder="Select Status"
                  mt={2}
                >
                  <option value="Active">Active</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="On Hold">On Hold</option>
                </Select>
              </FormControl>
              <FormControl id="priority" mb={4}>
                <FormLabel>Priority</FormLabel>
                <Select
                  value={selectedPriority}
                  onChange={(e) => setSelectedPriority(e.target.value)}
                  placeholder="Select Priority"
                  mt={2}
                >
                  <option value="Lowest">Lowest</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Highest">Highest</option>
                </Select>
              </FormControl>

              <FormControl id="Email" mb={4}>
                <FormLabel>Created by:</FormLabel>
                <Input
                  type="text"
                  isDisabled={true}
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
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

        <Box w="48%">
          <Stack spacing={4}>
            <Heading fontSize={'2xl'}>Existing Projects</Heading>
            {isLoading ? (
              <Text>Loading projects...</Text>
            ) : (
              [...projectsList].reverse().map((project) => (
                <React.Fragment key={project.project_id}>
                  <div
                    onClick={() => navigate(`/kanban/${project.project_id}`)}
                  >
                    <Box
                      bg={useColorModeValue('white', 'gray.700')}
                      boxShadow={'md'}
                      p={4}
                      rounded="lg"
                      minHeight="75px"
                    >
                      <Text fontSize="lg" fontWeight="bold">
                        {project.project_name}
                      </Text>
                      <Text fontSize="sm" color="gray.500" mt={2}>
                        {project.project_description}
                      </Text>
                      {project.createdByUser && (
                        <Text fontSize="sm" color="blue.500" mt={2}>
                          Created By: {project.createdByUser.name}
                        </Text>
                      )}
                    </Box>
                  </div>
                  <Button
                    backgroundColor="#E6676B"
                    size="sm"
                    width="100px"
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
              <Button
                colorScheme="red"
                onClick={handleDeleteProject}
                marginRight="2%"
              >
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
