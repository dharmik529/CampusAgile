import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  Select,
  useColorMode,
  Image,
  Divider,
  VStack,
  Center,
  Flex,
  HStack,
} from '@chakra-ui/react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApple,
  faGoogle,
  faMicrosoft,
} from '@fortawesome/free-brands-svg-icons'; // Import Font Awesome icons
import companyLogo from './logo.png';
import Spline from '@splinetool/react-spline';
import Loading from '../OtherComponents/loading';
import { useNavigate } from 'react-router-dom';

function Login() {
  const SPECIAL_CODE = 'campusagilestaff';
  const { colorMode } = useColorMode();
  const [isSpecialCodeEntered, setIsSpecialCodeEntered] = useState(false);
  const [specialCode, setSpecialCode] = useState('');
  const [isDropdownEnabled, setIsDropdownEnabled] = useState(false);

  const [isLogin, setIsLogin] = React.useState(true);
  const [formData, setFormData] = React.useState({
    fullName: '',
    username: '',
    category: '',
    universityEmail: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedName = name === 'universityEmail' ? 'email' : name;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      // If isLogin is true, call handleLogin
      e.preventDefault();

      // Update the apiUrl to your localhost
      const apiUrl = 'http://localhost:3000/auth/login';

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.universityEmail,
            password: formData.password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          const authToken = data.token;

          if (authToken) {
            // Store the token securely, for example, in local storage
            localStorage.setItem('authToken', authToken);
            localStorage.setItem('fullName', data.user.full_name);
            localStorage.setItem('userEmail', data.user.email);
            localStorage.setItem('userID', data.user.id);

            console.log('User successfully authenticated');
            console.log('Token:', authToken); 
            console.log('Full Name:', data.user.full_name);
            console.log('userID:', data.user.id);
            console.log('Redirecting to /home');

            // Check if the 'navigate' function is defined
            if (navigate) {
              navigate('/home');
            } else {
              console.error('Curruntly our software is down.');
            }
          } else {
            console.error('Token not received in the authentication response');
          }
        } else {
          console.error('Login failed:', response.statusText);
          // Clear password field
          setFormData({ ...formData, password: '' });

          // Display a pop-up or alert for incorrect credentials
          window.alert('Incorrect email or password. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      e.preventDefault();

      // Log the userType selection
      const dataToSend = isLogin
        ? formData
        : {
            ...formData,
            full_name: formData.fullName,
            username: formData.username,
            email: formData.universityEmail,
            password: formData.password,
            category: formData.category,
          };

      try {
        // Log the data before sending
        console.log('Data to Send:', dataToSend);

        // Call the backend API to create a user
        const response = await Axios.post(
          'http://localhost:3000/user/create',
          dataToSend,
        );

        if (response.status === 201) {
          console.log('User created successfully:', response.data);

          // Display a pop-up message
          window.alert('You have successfully signed up!');

          // Switch to the login section
          setIsLogin(true);
          setIsSpecialCodeEntered(false);

          // Clear all fields
          setFormData({
            fullName: '',
            username: '',
            category: '',
            universityEmail: '',
            password: '',
          });
        } else {
          console.error('Failed to create user:', response.statusText);
          window.alert('Failed to create user!');
          setFormData({
            fullName: '',
            username: '',
            category: '',
            universityEmail: '',
            password: '',
          });
        }
      } catch (error) {
        console.error('Error creating user:', error);
        window.alert('Failed to create user!');
        setFormData({
          fullName: '',
          username: '',
          category: '',
          universityEmail: '',
          password: '',
        });
      }
    }
  };

  const bodyStyle = {
    margin: 0,
    padding: 0,
    height: '100%',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '65%',
  };

  const sceneLinks = [
    'https://prod.spline.design/bv92hJOnufP2JS8M/scene.splinecode',
    'https://prod.spline.design/NfQXoEwSTOt6rzNf/scene.splinecode',
    'https://prod.spline.design/22DMrZrzLX2m1KYm/scene.splinecode',
    'https://prod.spline.design/MznCQpYMezyYF7TL/scene.splinecode',
  ];

  const offWhiteLinks = [
    'https://prod.spline.design/22DMrZrzLX2m1KYm/scene.splinecode',
  ];

  const [selectedLink] = React.useState(() => {
    const randomIndex = Math.floor(Math.random() * sceneLinks.length);
    return sceneLinks[randomIndex];
  });

  // Define overlayTextStyle based on offWhiteLinks
  const overlayTextStyle = {
    position: 'absolute',
    top: '50%', // Adjust as needed
    left: '40%', // Adjust as needed
    transform: 'translate(-50%, -50%)',
    zIndex: 1, // Place it above the Spline scene
    fontSize: '30px',
    color: offWhiteLinks.includes(selectedLink) ? 'antiquewhite' : 'black',
    letterSpacing: '2px', // Adjust the letter spacing as needed
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Add a shadow effect
  };

  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Add an event listener to the document for the contextmenu event
    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  if (isLoading) {
    // Display the loading component
    return (
      <Box>
        <Loading />
      </Box>
    );
  }

  // Add CSS styles for the left and right sides
  const leftSideStyle = {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    pl: [0, 6], // Adjust padding for responsiveness
    paddingRight: ['3%', '10%'], // Adjust padding for responsiveness
  };

  const rightSideStyle = {
    flex: '1', // Make the right side flexible
    padding: ['4%', '6%'], // Adjust padding for responsiveness
  };

  const handleSpecialCodeChange = (e) => {
    setSpecialCode(e.target.value);
  };

  const handleSpecialCodeSubmit = (e) => {
    e.preventDefault();

    // Check the special code
    if (specialCode === SPECIAL_CODE) {
      setIsSpecialCodeEntered(true);
      setIsDropdownEnabled(true);
    } else {
      window.alert('Invalid special code. Please try again.');
      setSpecialCode('');
    }
  };

  return (
    <Box
      display="flex"
      minHeight="100vh"
      bg={colorMode === 'dark' ? 'gray.980' : 'gray.200'}
      justifyContent="flex-start" // Align both sides to the left edge
    >
      <Box sx={leftSideStyle}>
        <Image
          src={companyLogo}
          alt="Company Logo"
          w={200}
          position="fixed"
          top={0}
          left={0}
          m={4}
          zIndex="1"
        />
        <Box sx={bodyStyle}>
          <Spline scene={selectedLink} style={{ opacity: 0.5 }} />
          <Text fontSize="2xl" fontWeight="" sx={overlayTextStyle}>
            Welcome to CampusAgile! We are your one-stop solution for all
            campus-related tasks and communication. Join us and make campus life
            easier and more efficient.
          </Text>
        </Box>
      </Box>

      <Divider orientation="vertical" borderColor="gray.300" h="100%" />

      <Container
        sx={rightSideStyle}
        maxW="container.sm"
        py={8}
        borderRadius="none"
        boxShadow="md"
        textAlign="center"
        position="relative"
        transition="0.3s all"
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        overflowY="scroll"
      >
        <Center height="100%">
          <VStack spacing={4} align="stretch">
            <Heading as="h1" mb={4}>
              {isLogin ? 'Login' : 'Sign Up'}
            </Heading>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                    />
                  </FormControl>

                  {/* Replace Phone Number with Username */}
                  <FormControl isRequired mt={4}>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      name="username" // Change the name to "username"
                      value={formData.username} // Use formData.username
                      onChange={handleChange}
                      placeholder="Enter Username"
                    />
                  </FormControl>

                  {/* Special Code Input */}
                  {!isSpecialCodeEntered && (
                    <FormControl mt={4}>
                      <FormLabel>Code for Staff/Faculty</FormLabel>
                      <Input
                        type="text"
                        value={specialCode}
                        onChange={handleSpecialCodeChange}
                        placeholder="Enter code if you are a staff/faculty"
                      />
                      <Button
                        type="button"
                        onClick={handleSpecialCodeSubmit}
                        mt={4}
                      >
                        Submit Code
                      </Button>
                    </FormControl>
                  )}

                  {/* Add a Dropdown for Student/Faculty */}
                  <FormControl isRequired mt={4}>
                    <FormLabel>
                      Are you a Student or Teacher or Faculty?
                    </FormLabel>
                    <HStack spacing={4}>
                      <label style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                          type="radio"
                          name="category"
                          value="Student"
                          checked={formData.category === 'Student'}
                          onChange={handleChange}
                        />
                        <span style={{ marginLeft: '5px' }}>Student</span>
                      </label>
                      {isDropdownEnabled && (
                        <>
                          <label
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <input
                              type="radio"
                              name="category"
                              value="Teacher"
                              checked={formData.category === 'Teacher'}
                              onChange={handleChange}
                            />
                            <span style={{ marginLeft: '5px' }}>Teacher</span>
                          </label>
                          <label
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <input
                              type="radio"
                              name="category"
                              value="Faculty"
                              checked={formData.category === 'Faculty'}
                              onChange={handleChange}
                            />
                            <span style={{ marginLeft: '5px' }}>Faculty</span>
                          </label>
                        </>
                      )}
                    </HStack>
                  </FormControl>
                </>
              )}
              {/*This is for login*/}
              <FormControl isRequired mt={4}>
                <FormLabel>University Email</FormLabel>
                <Input
                  type="email"
                  name="universityEmail"
                  value={formData.universityEmail}
                  onChange={handleChange}
                  placeholder="Enter University Email"
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
                  minLength={8}
                  pattern="^(?=.*[A-Z]).{8,}$"
                />
                <Text fontSize="sm" color="gray.500" mt={1}>
                  Password must be at least 8 characters long and contain one
                  uppercase letter.
                </Text>
              </FormControl>

              <Button type="submit" colorScheme="blue" mt={6} width="30%">
                {isLogin ? 'Login' : 'Sign Up'}
              </Button>
              <div></div>
              <Button
                as={Link}
                to="/ResetPassword"
                colorScheme="blue"
                mt={6}
                width="30%"
              >
                Fogot Password
              </Button>

              <Text mt={4}>Or use</Text>

              {/* Buttons for Apple, Google, and Microsoft */}
              <Button
                variant="outline"
                colorScheme="gray"
                mt={6}
                width="10%"
                border="none"
                cursor="not-allowed"
                _hover={{ color: 'gray.500' }}
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faApple} size="2x" /> {/* Apple Icon */}
              </Button>
              <Button
                variant="outline"
                colorScheme="gray"
                mt={6}
                width="10%"
                border="none"
                cursor="not-allowed"
                _hover={{ color: 'gray.500' }}
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faGoogle} size="2x" />{' '}
                {/* Google Icon */}
              </Button>
              <Button
                variant="outline"
                colorScheme="gray"
                mt={6}
                width="10%"
                border="none"
                cursor="not-allowed"
                _hover={{ color: 'gray.500' }}
                onClick={(e) => e.preventDefault()}
              >
                <FontAwesomeIcon icon={faMicrosoft} size="2x" />{' '}
                {/* Microsoft Icon */}
              </Button>
            </form>

            <Text mt={4}>
              {isLogin
                ? "Don't have an account? "
                : 'Already have an account? '}
              <Link
                onClick={() => setIsLogin(!isLogin)}
                color="teal.500"
                to={''}
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </Link>
            </Text>

            <Flex
              justifyContent="center"
              alignItems="center"
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              paddingY="1"
              color="gray.500"
            >
              <RouterLink to="/terms" target="_blank">
                <Text fontSize="sm" mr={2}>
                  Terms of Use
                </Text>
              </RouterLink>
              <Text fontSize="sm" mr={2}>
                |
              </Text>
              <RouterLink to="/PrivacyPolicy" target="_blank">
                <Text fontSize="sm" mr={2}>
                  Privacy Policy
                </Text>
              </RouterLink>
            </Flex>
          </VStack>
        </Center>
      </Container>
    </Box>
  );
}

export default Login;
