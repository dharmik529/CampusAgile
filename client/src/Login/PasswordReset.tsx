import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  Box,
  Container,
  Heading,
  Text,
  Input,
  Button,
  Alert,
  AlertIcon,
  IconButton,
} from '@chakra-ui/react';

function ResetPassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/user/findByEmail/${email}`);

        if (response.ok) {
          const data = await response.json();
          setUserId(data.id);
          setError('');
        } else {
          setUserId('');
          setError('User not found.');
        }
      } catch (err) {
        console.error('Error fetching user:', err);
        setError('An error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (email) {
      fetchUserId();
    }
  }, [email]);


  const handleResetPassword = async () => {
    try {
      // Check if passwords match
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      // Check if userId is available
      if (!userId) {
        setError('User not found.');
        return;
      }

      setIsLoading(true);
      // Send a POST request to update the password
      const response = await fetch(`http://localhost:3000/user/updatePassword/${userId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      // Check if the request was successful
      if (response.ok) {
        setResetSuccess(true);
        // navigate('/login');
        setError('');
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <Container maxW="container.md" py={8}>
      
      <Box
        borderWidth="1px"
        borderRadius="lg"
        p={8}
        boxShadow="md"
        textAlign="center"
      >
        <Heading as="h1" mb={4}>
          Reset Password
        </Heading>
        <Text mb={4}>Enter your email and new password to reset your password.</Text>

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          mb={4}
        />

        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          mb={4}
        />

        <Input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          mb={4}
        />

        <Button
          colorScheme="blue"
          onClick={handleResetPassword}
          mb={4}
          isDisabled={!email || !password || password !== confirmPassword}
        >
          Reset Password
        </Button>

        {resetSuccess && (
          <Alert status="success" borderRadius="lg" mb={4}>
            <AlertIcon />
            Password reset successfully. You can now log in with your new password.
          </Alert>
        )}

        {error && (
          <Alert status="error" borderRadius="lg" mb={4}>
            <AlertIcon />
            {error}
          </Alert>
        )}
      </Box>
      <IconButton
        as={Link}
        to="/login"
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
    </Container>
  );
}

export default ResetPassword;

