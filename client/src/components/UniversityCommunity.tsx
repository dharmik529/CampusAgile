import React from 'react';
import {
  Box,
  Container,
  Heading,
  IconButton,
  useColorMode,
  Flex,
  Circle,
  Text,
  Divider,
  SimpleGrid,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

function UniversityCommunity() {
  const { colorMode } = useColorMode();

  const buttonStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    backgroundColor: colorMode === 'dark' ? 'gray.600' : 'gray.300',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    _hover: {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'gray.400',
    },
  };

  const cardStyle = {
    p: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'lg',
    boxShadow: 'md',
    bg: colorMode === 'dark' ? 'gray.800' : 'white',
    color: colorMode === 'dark' ? 'white' : 'black',
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
        maxW="container.lg"
        py={8}
        borderRadius="10px"
        boxShadow="md"
        textAlign="center"
        position="relative"
        transition="0.3s all"
        bg={colorMode === 'dark' ? 'gray.700' : 'white'}
        pt={12}
        pb={12}
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
          University Community
        </Heading>
        <Text fontSize="xl" mb={4}>
          Welcome to the CampusAgile University Community! Connect with fellow members and explore our community resources.
        </Text>

        {/* Circular Buttons */}
        <Flex justifyContent="center" flexWrap="wrap">
          <Circle
            style={buttonStyle}
            onClick={() => console.log('University Groups')}
          >
            <Text fontSize="lg" fontWeight="bold">
              University Groups
            </Text>
          </Circle>

          <Circle
            style={buttonStyle}
            onClick={() => console.log('Ongoing Projects')}
          >
            <Text fontSize="lg" fontWeight="bold">
              Ongoing Projects
            </Text>
          </Circle>

          <Circle
            style={buttonStyle}
            onClick={() => console.log('Recents')}
          >
            <Text fontSize="lg" fontWeight="bold">
              Recents
            </Text>
          </Circle>

          <Circle
            style={buttonStyle}
            onClick={() => console.log('Trending Projects')}
          >
            <Text fontSize="lg" fontWeight="bold">
              Trending Projects
            </Text>
          </Circle>
          
          {/* Add more circular buttons as needed */}
        </Flex>

        {/* University Groups Section */}
        <Box mt={8}>
          <Heading as="h2" fontSize="2xl" mb={4} alignContent ="center">
            University Groups
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Group 1</Text>
                <Text>Join this university group to connect with students and professors.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Group 2</Text>
                <Text>Explore the latest research projects in this university group.</Text>
              </Box>
            </VStack>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Group 3</Text>
                <Text>Discuss upcoming events and share resources with other students.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Group 4</Text>
                <Text>Join this group to collaborate on innovative projects.</Text>
              </Box>
            </VStack>
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Ongoing Projects Section */}
        <Box>
          <Heading as="h2" fontSize="2xl" mb={4}>
            Ongoing Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Project 1</Text>
                <Text>Explore ongoing research projects in various fields of study.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Project 2</Text>
                <Text>Collaborate with students and professors on real-world projects.</Text>
              </Box>
            </VStack>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Project 3</Text>
                <Text>Contribute your expertise to ongoing coding projects.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Project 4</Text>
                <Text>Get involved in sustainable development projects and make an impact.</Text>
              </Box>
            </VStack>
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Recents Section */}
        <Box>
          <Heading as="h2" fontSize="2xl" mb={4}>
            Recents
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Recent Post 1</Text>
                <Text>Check out the latest updates on upcoming campus events.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Recent Post 2</Text>
                <Text>Join the discussion on sustainable practices in our community.</Text>
              </Box>
            </VStack>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Recent Post 3</Text>
                <Text>Learn about the recent achievements of our students and faculty.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Recent Post 4</Text>
                <Text>Share your thoughts on improving campus facilities in this discussion.</Text>
              </Box>
            </VStack>
          </SimpleGrid>
        </Box>

        <Divider my={8} />

        {/* Trending Projects Section */}
        <Box>
          <Heading as="h2" fontSize="2xl" mb={4}>
            Trending Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Trending Project 1</Text>
                <Text>Explore the most popular and innovative projects in our community.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Trending Project 2</Text>
                <Text>Contribute your skills to trending open-source projects and gain experience.</Text>
              </Box>
            </VStack>
            <VStack spacing={2} align="start">
              <Box {...cardStyle}>
                <Text fontWeight="bold">Trending Project 3</Text>
                <Text>Discover projects that align with your interests and career goals.</Text>
              </Box>
              <Box {...cardStyle}>
                <Text fontWeight="bold">Trending Project 4</Text>
                <Text>Stay updated with the latest developments in the CampusAgile community.</Text>
              </Box>
            </VStack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}

export default UniversityCommunity;
