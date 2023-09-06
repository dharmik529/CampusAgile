import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

function License() {
  const { colorMode } = useColorMode();

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
        position="relative"
        transition="0.3s all"
        bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
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
          CampusAgile License
        </Heading>
        <Text fontSize="xl" mb={4}>
          Thank you for choosing CampusAgile services. Below is your license information:
        </Text>

        <Box p={4}>
          <Text fontSize="lg" fontWeight="bold">License Information</Text>
          <Text>License ID: A12345</Text>
          <Text>License Holder: John Doe</Text>
          <Text>License Type: Free</Text>
          <Text>License Expiry: Never</Text>
          <Text>Right to Use: This software is provided for free use.</Text>
          <Text>If you wish to upgrade your license and access additional features, you can do so by clicking the button below:</Text>

          <Button colorScheme="blue" mt={4}>
            Upgrade License
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default License;
