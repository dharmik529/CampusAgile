import React, { useState } from 'react';
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/react'; // Import useColorMode
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

function AccountSetting() {
  const { colorMode } = useColorMode(); // Get the current color mode

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
      boxShadow="lg"
      maxW="500px"
      margin="0 auto"
      marginTop="35px"
      marginBottom="35px"
      bg={colorMode === 'dark' ? 'gray.700' : 'white'} // Use colorMode for background
      color={colorMode === 'dark' ? 'white' : 'black'} // Use colorMode for text color
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
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
      <IconButton
          as={Link}
          to="/"
          bottom="20px"
          right="20px"
          icon={<ArrowBackIcon />}
          zIndex="999"
          aria-label="Home"
          size="md"
          colorScheme="teal"
          mt={4}
          position="fixed"
        />
      </MotionBox>
      
  );
}

export default AccountSetting;
