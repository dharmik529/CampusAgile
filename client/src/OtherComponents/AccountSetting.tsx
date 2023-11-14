import React, { useState, useEffect } from 'react';
import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Text,
  IconButton,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useColorMode } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const MotionBox = motion(Box);

function AccountSetting() {
  const { colorMode } = useColorMode();

  const [userInfo, setUserInfo] = useState({
    name: '',
    jobTitle: '',
    department: '',
    organization: '',
    location: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const userFullName = localStorage.getItem('fullName');
    const userEmail = localStorage.getItem('userEmail');

    setUserInfo({
      ...userInfo,
      name: userFullName || '',
      email: userEmail,
    });
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log('Updated user information:', userInfo);
  };

  return (
    <div>
      <MotionBox
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="lg"
        maxW="500px"
        margin="0 auto"
        marginTop="5%"
        marginBottom="5%"
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize="2xl" fontWeight="bold" textAlign="center" my={4}>
          Account Settings
        </Text>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            cursor="not-allowed"
            value={userInfo.name}
            onChange={handleInputChange}
            readOnly
            style={{ cursor: 'not-allowed', opacity: 0.5, pointerEvents: 'none' }}
            />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Job Title</FormLabel>
          <Input
            type="text"
            name="jobTitle"
            placeholder="Your Job Title"
            value={userInfo.jobTitle}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Department</FormLabel>
          <Input
            type="text"
            name="department"
            placeholder="Your Department"
            value={userInfo.department}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Organization</FormLabel>
          <Input
            type="text"
            name="organization"
            placeholder="Your Organization"
            value={userInfo.organization}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Based Location</FormLabel>
          <Input
            type="text"
            name="location"
            placeholder="Your Location"
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
            placeholder="Your Email"
            value={userInfo.email}
            onChange={handleInputChange}
            cursor="not-allowed"
            readOnly
            style={{ cursor: 'not-allowed', opacity: 0.5, pointerEvents: 'none' }}
            />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={userInfo.phone}
            onChange={handleInputChange}
          />
        </FormControl>

        <Button mt={4} colorScheme="blue" onClick={handleSave}>
          Save Changes
        </Button>
      </MotionBox>
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
    </div>
  );
}

export default AccountSetting;
