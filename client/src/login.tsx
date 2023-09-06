import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  useColorMode,
  IconButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Login() {
  const { colorMode } = useColorMode();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    universityEmail: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login logic
    } else {
      // Handle signup logic
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg={colorMode === 'dark' ? 'gray.980' : 'gray.200'}
    >
      <Container
        maxW="container.sm"
        py={8}
        borderRadius="10px"
        boxShadow="md"
        textAlign="center"
        position="relative"
        transition="0.3s all"
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      >
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

        <Heading as="h1" mb={4}>
          {isLogin ? 'Login' : 'Sign Up'}
        </Heading>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <FormControl isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />
              </FormControl>

              <FormControl isRequired mt={4}>
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />
              </FormControl>
            </>
          )}

          <FormControl isRequired mt={4}>
            <FormLabel>University Email</FormLabel>
            <Input
              type="email"
              name="universityEmail"
              value={formData.universityEmail}
              onChange={handleChange}
              placeholder="john.doe@example.edu"
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="(Optional)"
            />
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
              minLength="8"
              pattern="^(?=.*[A-Z]).{8,}$"
            />
            <Text fontSize="sm" color="gray.500" mt={1}>
              Password must be at least 8 characters long and contain one uppercase letter.
            </Text>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            mt={6}
            width="100%"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
        </form>

        <Text mt={4}>
          {isLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <Link to="#" onClick={() => setIsLogin(!isLogin)} color="teal.500">
            {isLogin ? 'Sign Up' : 'Login'}
          </Link>
        </Text>
      </Container>
    </Box>
  );
}

export default Login;
