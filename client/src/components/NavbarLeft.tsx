import React, { useState } from 'react';
import { Box, Flex, Button, Text, useColorMode, useColorModeValue, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faSearch, faPlus, faHome, faBriefcase, faProjectDiagram, faUsers, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CreateIssue from './CreateIssue';
import Team from './Team'; 


const MotionBox = motion(Box);

const SlidingMenu = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transform: translateX(-78%);
  transition: transform 0.2s ease-in-out, width 0.3s;
  z-index: 999;
  overflow: hidden;

  &:hover {
    width: 250px;
    transform: translateX(0);
  }
`;

const Content = styled(Flex)`
  flex-direction: column;
  padding: 20px;
  visibility: visible;
`;

const MenuButtonContainer = styled(Flex)`
  flex-direction: column;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s; /* Adjust the duration as needed */

  ${SlidingMenu}:hover & {
    opacity: 1;
    pointer-events: auto;
  }
`;

function NavbarLeft() {
  const [isCreateIssueModalOpen, setIsCreateIssueModalOpen] = useState(false);
  const [isProjectsModalOpen, setIsProjectsModalOpen] = useState(false); // Add state for Projects modal

  const openCreateIssueModal = () => {
    setIsCreateIssueModalOpen(true);
  };

  const closeCreateIssueModal = () => {
    setIsCreateIssueModalOpen(false);
  };

  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Sample team members data
  const teamMembers = [
    { id: 1, name: 'Team Member 1', role: 'Developer' },
    { id: 2, name: 'Team Member 2', role: 'Designer' },
    // Add more team members as needed
  ];

  const openTeamModal = () => {
    setIsTeamModalOpen(true);
  };

  const closeTeamModal = () => {
    setIsTeamModalOpen(false);
  };

  return (
    <SlidingMenu
      as={MotionBox}
      direction="column"
      align="center"
      justify="flex-start"
      minW="280px" // Set a minimum width
      w={{ base: '70px', md: '280px' }} // Adjust the width based on device size
      bgColor={useColorModeValue('#007FFF', 'gray.900')}
      p={4}
      zIndex={999}
    >
      <MenuButtonContainer>
        {/* Logo */}
        <Box my={4}>
          <Text fontSize="3xl" fontWeight="bold" color="white" marginBottom="10%">
            CampusAgile
          </Text>
        </Box>

        {/* Search Input */}
        <Box w="100%" mb={4}>
          <Button
            w="90%"
            bgColor={useColorModeValue('#49a2fc', 'gray.700')}
            leftIcon={<Icon as={FontAwesomeIcon} icon={faSearch} marginRight="2" />}
          >
            Search Issue
          </Button>
        </Box>

        {/* Create Issue Button */}
        <Box w="100%" mb={4}>
          <Button
            onClick={openCreateIssueModal}
            w="90%"
            bgColor={useColorModeValue('#49a2fc', 'gray.700')}
            leftIcon={<Icon as={FontAwesomeIcon} icon={faPlus} marginRight="2" />}
          >
            Create Issue
          </Button>
        </Box>
        <CreateIssue isOpen={isCreateIssueModalOpen} onClose={closeCreateIssueModal} column={undefined} onCreateTask={undefined} taskId={undefined} />

        {/* Home Button */}
        <Box w="100%" mb={4}>
          <Link to="/home">
            <Button
              w="90%"
              bgColor={useColorModeValue('#49a2fc', 'gray.700')}
              leftIcon={<Icon as={FontAwesomeIcon} icon={faHome} marginRight="2" />}
            >
              Home
            </Button>
          </Link>
        </Box>

        {/* My Work Button */}
        <Box w="100%" mb={4}>
          <Button
            w="90%"
            bgColor={useColorModeValue('#49a2fc', 'gray.700')}
            leftIcon={<Icon as={FontAwesomeIcon} icon={faBriefcase} marginRight="2" />}
          >
            My Work
          </Button>
        </Box>

        {/* Projects Button */}
        <Link to="/project"> 
          <Box w="100%" mb={4}>
            <Button
              w="90%"
              bgColor={useColorModeValue('#49a2fc', 'gray.700')}
              leftIcon={<Icon as={FontAwesomeIcon} icon={faProjectDiagram} marginRight="2" />}
            >
              Projects
            </Button>
          </Box>
        </Link>


        {/* Team Button */}
        <Box w="100%" mb={4}>
          <Button
            w="90%"
            bgColor={useColorModeValue('#49a2fc', 'gray.700')}
            leftIcon={<Icon as={FontAwesomeIcon} icon={faUsers} marginRight="2" />}
            onClick={openTeamModal}
          >
            Team
          </Button>
        </Box>

        <Team
          isOpen={isTeamModalOpen}
          onClose={closeTeamModal}
          projectTitle="Your Project Title"
          teamMembers={teamMembers}
        />

        {/* About Us Button (positioned at the bottom) */}
        <Box
          w="100%"
          position="absolute"
          bottom="0"
          left="0"
          p={4}
          width="100%"
          textAlign="center"
        >
          <Button
            bgColor={useColorModeValue('#007FFF', 'gray.900')}
            w="90%"
            as="a"
            href="https://team.deeppatel.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon as={FontAwesomeIcon} icon={faCircleQuestion} marginRight="2" /> About Us
          </Button>
        </Box>
      </MenuButtonContainer>
    </SlidingMenu>
  );
}

export default NavbarLeft;
