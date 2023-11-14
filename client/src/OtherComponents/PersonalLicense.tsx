import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

function generateLicenseNumber() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = 15;
  let licenseNumber = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    licenseNumber += characters[randomIndex];
  }
  return licenseNumber;
}

function License() {
  const [licenseHolder, setLicenseHolder] = useState('');
  const licenseNumber = generateLicenseNumber();

  useEffect(() => {
    const userFullName = localStorage.getItem('fullName');
    const capitalizedFullName = userFullName
      ? userFullName
          .split(' ')
          .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
          .join(' ')
      : '';
    setLicenseHolder(capitalizedFullName);
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Container
        maxW="container.lg"
        py={8}
        borderRadius="10px"
        boxShadow="md"
        textAlign="center"
        bgColor={useColorModeValue('gray.50', 'gray.900')}
      >
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

        <Heading as="h1" mb={4}>
          CampusAgile License
        </Heading>
        <Text fontSize="xl" mb={4}>
          Thank you for choosing CampusAgile services. Below is your license
          information:
        </Text>

        <Box p={4}>
          <Text fontSize="lg" fontWeight="bold">
            License Information
          </Text>
          <Text>{`License ID: ${licenseNumber}`}</Text>
          <Text>{`License Holder: ${licenseHolder}`}</Text>
          <Text>License Type: Free</Text>
          <Text>License Expiry: Never</Text>
          <Text>
            Right to Use: This software is provided for free use. You have the
            right to use this software for educational and non-commercial
            purposes. It may not be resold or used for any commercial
            applications without proper licensing. By using this software, you
            agree to the terms and conditions outlined in our{' '}
            <Link to="/terms" color="blue.500" style={{ fontWeight: 'Bold' }}>
              Terms of Service
            </Link>
            .
          </Text>
          <Text>
            If you wish to upgrade your license and access additional features,
            you can do so by clicking the button below:
          </Text>

          <Link to="https://buy.stripe.com/4gw03pcgX7O8d5CdQT" target="_blank">
            <Button colorScheme="blue" mt={4}>
              Upgrade License
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default License;
