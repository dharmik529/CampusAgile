import React, { useState } from 'react';
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const MotionBox = motion(Box); // Wrap your Box component with MotionBox

function AccountSetting() {
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    jobTitle: 'Software Engineer',
    department: 'Engineering',
    organization: 'Example Inc.',
    location: 'New York, NY',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    // You can implement logic to save the user's updated information here
    console.log('Updated user information:', userInfo);
  };

  return (
    <MotionBox
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg" // Add shadow
      maxW="500px"
      margin="0 auto"
      marginTop="35px"
      marginBottom="35px"
      bg="white"
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation on component mount
      transition={{ duration: 0.5 }} // Animation duration
    >
      <Text fontSize="2xl" fontWeight="bold" textAlign="center" my={4}>
        Account Settings
      </Text>
      <Text fontSize="l" fontWeight="bold" mb={4}>
        About You
      </Text>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Job Title</FormLabel>
        <Input
          type="text"
          name="jobTitle"
          value={userInfo.jobTitle}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Department</FormLabel>
        <Input
          type="text"
          name="department"
          value={userInfo.department}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Organization</FormLabel>
        <Input
          type="text"
          name="organization"
          value={userInfo.organization}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Based Location</FormLabel>
        <Input
          type="text"
          name="location"
          value={userInfo.location}
          onChange={handleInputChange}
        />
      </FormControl>

      <Divider my={4} />

      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Contact Info
      </Text>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Phone</FormLabel>
        <Input
          type="tel"
          name="phone"
          value={userInfo.phone}
          onChange={handleInputChange}
        />
      </FormControl>

      <Button mt={4} colorScheme="blue" onClick={handleSave}>
        Save Changes
      </Button>
      </MotionBox>
  );
}

export default AccountSetting;
