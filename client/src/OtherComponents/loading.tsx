import React, { useEffect, useState } from 'react';
import { Spinner, Center, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import logo from '../Login/logo.png';
import whitelogo from '../Login/wlogo.png';

function Loading() {
  const [isLoading, setIsLoading] = useState(true);
  const isDarkMode = useColorModeValue(false, true); // Check if dark mode is on

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <Center minH="100vh">
        <Flex direction="column" alignItems="center">
          <Spinner size="xl" color="blue.500" emptyColor="gray.200" thickness="4px" speed="0.65s" />
          <Image src={isDarkMode ? whitelogo : logo} height="40px" paddingTop="10px" alt="Logo" />
        </Flex>
      </Center>
    );
  }

  return null;
}

export default Loading;
