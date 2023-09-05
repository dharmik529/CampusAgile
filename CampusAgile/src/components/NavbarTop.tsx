import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Link, Avatar, useColorModeValue, useColorMode } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

function NavbarTop() {
  const { colorMode } = useColorMode(); // Get the current color mode
  const [isVisible, setIsVisible] = useState(true); // State to manage visibility

  const buttonVariants = {
    initial: { opacity: 0.8, y: 0 },
    hover: { opacity: 1, y: -2 },
  };

  useEffect(() => {
    // Add event listener to detect cursor position
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsVisible(true); // Display NavbarTop when cursor is near the top
      } else {
        setIsVisible(false); // Hide NavbarTop when cursor moves away
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.7rem"
      bgColor={useColorModeValue('gray.100', 'gray.800')} // Set background color based on color mode
      borderBottom="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')} // Set border color based on color mode
      position="absolute" // Position the navbar absolutely
      width="100%"
      zIndex="9999" // Set a high z-index to make sure the navbar is above other content
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'} // Hide or display the navbar based on visibility
      transition="transform 0.4s cubic-bezier(1, 1.15, 0.44, 1.04)" // Add a transition effect
    >
      {/* Logo */}
      <Box>
        <Text fontSize="lg" fontWeight="bold">
          CampusAgile
        </Text>
      </Box>

      {/* Menu Items (Centered) */}
      <Flex as="ul" listStyleType="none" justify="center" flex="1">
        <li>
          <Link
            href="#"
            borderRadius="full" // Makes the button fully rounded
            p="0.5rem 1.5rem" // Add more horizontal padding
            bgColor={useColorModeValue('purple.500', 'purple.300')} // Set button color based on color mode
            color="white" // Set text color
            marginRight="1rem"
            _hover={{ bgColor: useColorModeValue('purple.600', 'purple.400') }} // Set hover background color based on color mode
            _focus={{ boxShadow: 'none' }} // Remove focus box
            textDecoration="none" // Remove text decoration
          >
            My Work
          </Link>
        </li>
        <li>
          <Link
            href="#"
            borderRadius="full" // Makes the button fully rounded
            p="0.5rem 1.5rem" // Add more horizontal padding
            bgColor={useColorModeValue('purple.500', 'purple.300')} // Set button color based on color mode
            color="white" // Set text color
            marginRight="1rem"
            _hover={{ bgColor: useColorModeValue('purple.600', 'purple.400') }} // Set hover background color based on color mode
            _focus={{ boxShadow: 'none' }} // Remove focus box
            textDecoration="none" // Remove text decoration
          >
            Projects
          </Link>
        </li>
        
        <li>
          <Link
            href="#"
            borderRadius="full" // Makes the button fully rounded
            p="0.5rem 1.5rem" // Add more horizontal padding
            bgColor={useColorModeValue('purple.500', 'purple.300')} // Set button color based on color mode
            color="white" // Set text color
            marginRight="1rem"
            _hover={{ bgColor: useColorModeValue('purple.600', 'purple.400') }} // Set hover background color based on color mode
            _focus={{ boxShadow: 'none' }} // Remove focus box
            textDecoration="none" // Remove text decoration
          >
            Teams
          </Link>
        </li>

        <li>
          <Link
            href="#"
            borderRadius="full" // Makes the button fully rounded
            p="0.5rem 1.5rem" // Add more horizontal padding
            bgColor={useColorModeValue('purple.500', 'purple.300')} // Set button color based on color mode
            color="white" // Set text color
            marginRight="1rem"
            _hover={{ bgColor: useColorModeValue('purple.600', 'purple.400') }} // Set hover background color based on color mode
            _focus={{ boxShadow: 'none' }} // Remove focus box
            textDecoration="none" // Remove text decoration
          >
            Filters
          </Link>
        </li>
      </Flex>

      {/* Profile Image and Name */}
      <Box>
        <Flex align="center">
          <Avatar size="sm" name="Deep Patel" src="/path/to/profile-image.jpg" marginRight="0.5rem" />
          <Text fontSize="sm" fontWeight="medium">
            Deep Patel
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default NavbarTop;
