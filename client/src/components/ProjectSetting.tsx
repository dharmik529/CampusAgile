/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Textarea,
  ModalBody,
  Input,
  Button,
  Box,
} from '@chakra-ui/react'; 

function ProjectSetting({ isOpen, onClose, onSaveProjectName, projectName }) {
  const [newProjectName, setNewProjectName] = useState(projectName);

  const handleSave = () => {
    onSaveProjectName(newProjectName);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Project Settings</ModalHeader>
        <ModalBody overflowY="auto">
          <FormControl mb={4}>
            <FormLabel htmlFor="projectName">Project Name</FormLabel>
            <Input
              id="projectName"
              type="text"
              placeholder="Enter project name"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="projectURL">Project URL</FormLabel>
            <Input id="projectURL" type="text" placeholder="Enter project URL" />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="projectDescription">Project Description</FormLabel>
            <Textarea id="projectDescription" placeholder="Enter project description" rows={8} />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="projectCategory">Project Category</FormLabel>
            <Input id="projectCategory" type="text" placeholder="Enter project category" />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose} marginRight="1%">
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleSave}>
            Save Changes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default ProjectSetting;
