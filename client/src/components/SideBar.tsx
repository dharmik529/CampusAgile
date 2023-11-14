import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  VStack,
  Text,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  ModalBody,
  Select,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faCog, faListAlt, faFilter, faFileAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

// eslint-disable-next-line react/prop-types
function SideBar( {onSwitchToCode, onSwitchToFiles, onSwitchToKanban} ) {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '4px',
    marginBottom: '8px',
    width: '100%',
    transition: 'background-color 0.3s',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const hrStyle = {
    width: '115%',
    border: 'none',
    borderTop: '1px solid #000',
    margin: '15px 0',
    opacity: '20%',
  };

  const sidebarBgColor = useColorModeValue('gray.200', 'gray.700');

  const [isProjectSettingOpen, setIsProjectSettingOpen] = useState(false);

  const openProjectSetting = () => {
    setIsProjectSettingOpen(true);
  };

  const closeProjectSetting = () => {
    setIsProjectSettingOpen(false);
  };

  const [projectData, setProjectData] = useState({
    projectName: '',
    description: '',
    url: '',
    projectType: '',
  });

  const handleProjectInputChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveProjectSettings = () => {
    // Handle saving project settings here
    console.log('Project Settings:', projectData);
    // You can send the projectData to your server or perform any necessary actions here
    // Close the modal after saving
    closeProjectSetting();
  };

  return (
    <Box
      w="300px"
      h="100%"
      bg={sidebarBgColor}
      position="fixed"
      left="0"
      top="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingLeft="62px"
      paddingTop="50px"
    >
      <VStack spacing="4" align="center" p="4">
        <Text fontWeight="bold" paddingBottom="20px">
          Project Title
        </Text>

        <Button
          style={{
            ...buttonStyle,
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={onSwitchToKanban}
        >
          <FontAwesomeIcon icon={faTasks} style={iconStyle} />
          Kanban Board
        </Button>

        <Button
          style={{
            ...buttonStyle,
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={openProjectSetting}
        >
          <FontAwesomeIcon icon={faCog} style={iconStyle} />
          Project Settings
        </Button>

        <hr style={hrStyle} />

        <Button
          style={{
            ...buttonStyle,
            cursor: 'not-allowed',
            width: '100%',
          }}
        >
          <FontAwesomeIcon icon={faListAlt} style={iconStyle} />
          Not Implemented
        </Button>

        <Button
          style={{
            ...buttonStyle,
            cursor: 'not-allowed',
            width: '100%',
          }}
        >
          <FontAwesomeIcon icon={faFilter} style={iconStyle} />
          Not Implemented
        </Button>

        <Button
          style={{
            ...buttonStyle,
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={onSwitchToFiles}
        >
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
          Files
        </Button>

        <Button
          style={{
            ...buttonStyle,
            cursor: 'pointer',
            width: '100%',
          }}
          onClick={onSwitchToCode}
        >
          <FontAwesomeIcon icon={faCode} style={iconStyle} />
          Code
        </Button>
      </VStack>

      {isProjectSettingOpen && (
        <Modal isOpen={isProjectSettingOpen} onClose={closeProjectSetting}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Project Settings</ModalHeader>
            <ModalBody overflowY="auto">
              <FormControl mb={4}>
                <FormLabel htmlFor="projectName">Project Name</FormLabel>
                <Input
                  id="projectName"
                  name="projectName"
                  placeholder="Enter project name"
                  value={projectData.projectName}
                  onChange={handleProjectInputChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Enter project description"
                  value={projectData.description}
                  onChange={handleProjectInputChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel htmlFor="url">URL</FormLabel>
                <Input
                  id="url"
                  name="url"
                  placeholder="Enter project URL"
                  value={projectData.url}
                  onChange={handleProjectInputChange}
                  required
                />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel htmlFor="projectType">Project Type</FormLabel>
                <Select
                  id="projectType"
                  name="projectType"
                  placeholder="Select project type"
                  value={projectData.projectType}
                  onChange={handleProjectInputChange}
                  required
                >
                  <option value="type1">Type 1</option>
                  <option value="type2">Type 2</option>
                  <option value="type3">Type 3</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={saveProjectSettings}>
                Save Changes
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}


export default SideBar;
function togglePage(arg0: string) {
  throw new Error('Function not implemented.');
}

