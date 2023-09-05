import React from 'react';
import { Box, Flex, Input, Button, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from React Router

const MotionBox = motion(Box);

function NavbarLeft() {
  const variants = {
    hidden: { opacity: 1, x: 0 }, // Displayed by default
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <div>
      <MotionBox
        as={Flex}
        direction="column"
        align="center"
        justify="flex-start"
        h="100vh"
        w="280px"
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        opacity={1} // Displayed by default
        p={4}
        initial="visible" // Initially visible
        animate="visible"
        variants={variants}
        style={{ position: 'fixed', left: 0 }} // Fixed position
        zIndex={999} // Ensure it's above other content
      >
        {/* Logo */}
        <MotionBox my={4} variants={variants}>
          <Text fontSize="xl" fontWeight="bold">
            CampusAgile
          </Text>
        </MotionBox>

        {/* Search Input */}
        <MotionBox w="100%" mb={4} variants={variants}>
          <Button w="100%" colorScheme="purple">
            Search Issue
          </Button>
        </MotionBox>

        {/* Create Issue Button */}
        <MotionBox w="100%" mb={4} variants={variants}>
          <Button w="100%" colorScheme="purple">
            Create Issue
          </Button>
        </MotionBox>

        {/* Home Button */}
        <MotionBox w="100%" mb={4} variants={variants}>
          <Link to="/home">
            <Button w="100%" colorScheme="purple">
              Home
            </Button>
          </Link>
        </MotionBox>

        {/* About Us Button (positioned at the bottom) */}
        <MotionBox w="100%" mt="auto" variants={variants}>
          {/* Use mt="auto" to push the button to the bottom */}
          <Button
            w="100%"
            colorScheme="purple"
            as="a"
            href="https://team.deeppatel.tech"
            target="_blank"
            rel="noopener noreferrer"
          >
            About Us
          </Button>
        </MotionBox>
      </MotionBox>
    </div>
  );
}

export default NavbarLeft;
