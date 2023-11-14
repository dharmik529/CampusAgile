import React, { useState } from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Center,
} from '@chakra-ui/react';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';
import {
  faTasks,
  faChevronDown,
  faHome
} from '@fortawesome/free-solid-svg-icons'; // Import the home icon
import { Link } from 'react-router-dom';

function ScrumNavbarLeft() {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 16px',
    borderRadius: '4px',
    marginBottom: '8px',
    width: '100%',
    transition: 'background-color 0.3s',
    justifyContent: 'space-between',
  };

  const iconStyle = {
    marginRight: '8px',
    width: '20px',
  };

  const hrStyle = {
    width: '115%',
    border: 'none',
    borderTop: '1px solid #000',
    margin: '15px 0',
    opacity: '20%',
  };

  const sidebarBgColor = useColorModeValue('gray.200', 'gray.700');

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null);
  const [teamMembers, setTeamMembers] = useState([]);

  const [dropdownLabel, setDropdownLabel] = useState('Projects');

  // List of projects, their managers, and associated team members (you can replace this with actual data)
  const projects = [
    {
      name: 'Project A',
      manager: 'Manager 1',
      members: ['Team Member 1', 'Team Member 2', 'Team Member 3'],
    },
    {
      name: 'Project B',
      manager: 'Manager 2',
      members: ['Team Member 4', 'Team Member 5', 'Team Member 6'],
    },
    {
      name: 'Project C',
      manager: 'Manager 3',
      members: ['Team Member 7', 'Team Member 8', 'Team Member 9'],
    },
  ];

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setSelectedManager(project.manager);
    setTeamMembers(project.members);
    setDropdownLabel(project.name);
  };

  return (
    <Box
      w={{ base: '100%', md: '17%' }} // Adjust the width based on device size
      h="100%"
      bg={sidebarBgColor}
      position="fixed"
      left="0"
      top="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingLeft="0px"
      paddingTop="50px"
    >
      <VStack spacing="4" align="center" p="4">
        <Text fontWeight="bold" paddingBottom="20px" fontSize="2xl">
          Scrum
        </Text>

        <Link to="/home">
          <Button
            style={{
              ...buttonStyle,
              cursor: 'pointer',
              width: '100%', 
            }}
          >
            <FontAwesomeIcon icon={faHome} style={iconStyle} />
            Home
          </Button>
        </Link>

        <Link to="/Project">
          <Button
            style={{
              ...buttonStyle,
              cursor: 'pointer',
              width: '100%', 
            }}
          >
            <FontAwesomeIcon icon={faTasks} style={iconStyle} />
            Kanban Board
          </Button>
        </Link>

        <Menu>
          <MenuButton
            as={Button}
            style={{
              ...buttonStyle,
              cursor: 'pointer',
              width: '100%',
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} style={iconStyle} />
            {dropdownLabel}
          </MenuButton>
          <MenuList>
            {projects.map((project, index) => (
              <MenuItem key={index} onClick={() => handleProjectSelect(project)}>
                {project.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>

        <hr style={hrStyle} />

        <Flex direction="column" alignItems="center">
          <Text fontWeight="bold" fontSize="xl">Project Manager: </Text>
          <Text fontSize="l">{selectedManager}</Text>
        </Flex>

        {teamMembers.length > 0 && (
          <Flex direction="column" alignItems="center">
            <Text fontWeight="bold" fontSize="xl">Team Members:</Text>
            {teamMembers.map((member, index) => (
              <Text fontSize="l" key={index}>{member}</Text>
            ))}
          </Flex>
        )}
      </VStack>
    </Box>
  );
}

export default ScrumNavbarLeft;
