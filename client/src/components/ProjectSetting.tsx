// ProjectSetting.tsx
import React from 'react';
import { Box, Text, Button, Input, Textarea, FormControl, FormLabel } from '@chakra-ui/react';

function ProjectSetting({ onClose }) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="white"
      p="4"
      borderRadius="md"
      boxShadow="lg"
      zIndex="999"
      width="400px" // Adjust the width as needed
    >
      <Text fontWeight="bold" fontSize="xl" mb="4">
        Project Settings
      </Text>
      <FormControl id="projectName" mb="4">
        <FormLabel>Project Name</FormLabel>
        <Input type="text" placeholder="Enter project name" />
      </FormControl>
      <FormControl id="projectURL" mb="4">
        <FormLabel>Project URL</FormLabel>
        <Input type="text" placeholder="Enter project URL" />
      </FormControl>
      <FormControl id="projectDescription" mb="4">
        <FormLabel>Project Description</FormLabel>
        <Textarea placeholder="Enter project description" />
      </FormControl>
      <FormControl id="projectCategory" mb="4">
        <FormLabel>Project Category</FormLabel>
        <Input type="text" placeholder="Enter project category" />
      </FormControl>
      <Button colorScheme="blue" onClick={onClose} mt="4">
        Save Changes
      </Button>
    </Box>
  );
}

export default ProjectSetting;
