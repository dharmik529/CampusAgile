import React, { useState, useRef } from 'react';
import {
  Box,
  Container,
  Heading,
  Input,
  FormControl,
  FormLabel,
  Button,
  Text,
  VStack,
  HStack,
  useColorMode,
  useColorModeValue,
  SlideFade,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Loading from '../OtherComponents/loading';

function OTPVerification() {
  const { colorMode } = useColorMode();
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('black', 'white');

  const [verificationMethod, setVerificationMethod] = useState('email'); // Default to email verification
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Array to store OTP digits

  // Refs for OTP input fields
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleVerificationMethodChange = (method) => {
    setVerificationMethod(method);
  };

  const handleOTPInputChange = (e, index) => {
    const updatedOTP = [...otp];
    updatedOTP[index] = e.target.value;
    setOtp(updatedOTP);

    // Automatically focus on the next input field, if available
    if (index < inputRefs.length - 1 && e.target.value.length === 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification here, e.g., send OTP to server for validation
    // You can add the necessary logic to verify OTP based on the selected method
  };

  return (
    <Box>
      <Loading />
      <Box
        display="flex"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        bg={colorMode === 'dark' ? 'gray.980' : 'gray.200'}
      >
        <SlideFade in={true} offsetY="20px">
          <Container
            maxW="container.sm"
            p={8}
            borderRadius="md"
            boxShadow="md"
            textAlign="center"
            bg={bgColor}
            color={textColor}
          >
            <VStack spacing={4} align="stretch">
              <Heading as="h1" mb={4}>
                User Verification
              </Heading>

              <form onSubmit={handleOTPSubmit}>
                <h3 mb={4}> 
                  Verification code sent to your email
                </h3>


                <FormControl isRequired mt={4}>
                  <FormLabel>Enter 6 Digit Code</FormLabel>
                  <HStack spacing={2} justify="center">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        type="text"
                        name={`otp-${index}`}
                        value={digit}
                        onChange={(e) => handleOTPInputChange(e, index)}
                        maxLength="1"
                        size="lg"
                        textAlign="center"
                        borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                        _focus={{ borderColor: 'blue.500' }}
                        ref={inputRefs[index]}
                      />
                    ))}
                  </HStack>
                </FormControl>

                <Button type="submit" colorScheme="blue" mt={6} width="100%">
                  Verify code
                </Button>

                <Text mt={4}>
                  <Link to="#">Resend code</Link>
                </Text>
              </form>
            </VStack>
          </Container>
        </SlideFade>
      </Box>
    </Box>
  );
}

export default OTPVerification;
