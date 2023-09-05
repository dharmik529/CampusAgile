import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import {
  Box,
  Text,
  SimpleGrid,
  Center,
  GridItem,
  Container,
} from '@chakra-ui/react';
import {
  CheckCircleIcon,
  ViewIcon,
  ExternalLinkIcon,
} from '@chakra-ui/icons';
import HomeNavbar from './HomeNavbar';

function Home() {
  return (
    <Box>
      {/* Top Navigation Bar */}
      <Box bg="transparent" pt={4}> {/* Add top padding here */}
        <HomeNavbar />
      </Box>

      <Container maxW="container.xl" p={4}>
        {/* Software Cards Section */}
        <Text fontSize="l" fontWeight="bold" mb={4}>
          Switch to
        </Text>
        <SimpleGrid columns={4} spacing={4}>

          {/* Kanban Card */}
          <GridItem>
            <Link to="/kanban"> {/* Wrap the entire GridItem with Link */}
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                minH="200px"
                _hover={{ // Add hover effect
                  bg: 'gray.100', // Change background color on hover
                }}
              >
                <Center>
                  <CheckCircleIcon boxSize={8} color="green.500" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold">
                  Kanban
                </Text>
                <Text color="gray.600">Kanban board for task management</Text>
              </Box>
            </Link>
          </GridItem>

        {/* Scrum Card */}
        <GridItem>
          <Link to="/Scrum">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <ViewIcon boxSize={8} color="blue.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                Scrum
              </Text>
              <Text color="gray.600">Scrum framework for agile development</Text>
            </Box>
          </Link>
        </GridItem>

        {/* Administration Card */}
        <GridItem>
          <Link to="/">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <CheckCircleIcon boxSize={8} color="green.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                Administration
              </Text>
              <Text color="gray.600">Manage system administration</Text>
            </Box>
          </Link>
        </GridItem>

        {/* Account Setting Card */}
        <GridItem>
          <Link to="/AccountSetting" target="_blank">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <ViewIcon boxSize={8} color="blue.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                Account Setting
              </Text>
              <Text color="gray.600">Update your account settings</Text>
            </Box>
          </Link>
        </GridItem>

        {/* CampusAgile Support Card */}
        <GridItem>
          <Link to="/">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <ExternalLinkIcon boxSize={8} color="blue.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                CampusAgile Support
              </Text>
              <Text color="gray.600">Get help and support</Text>
            </Box>
          </Link>
        </GridItem>

        {/* University Community Card */}
        <GridItem>
          <Link to="/">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <ExternalLinkIcon boxSize={8} color="blue.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                University Community
              </Text>
              <Text color="gray.600">Join the university community</Text>
            </Box>
          </Link>
        </GridItem>

        {/* License Card */}
        <GridItem>
          <Link to="/">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <CheckCircleIcon boxSize={8} color="green.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                License
              </Text>
              <Text color="gray.600">License information</Text>
            </Box>
          </Link>
        </GridItem>

        {/* Documentations Card */}
        <GridItem>
          <Link to="/documentation">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <ExternalLinkIcon boxSize={8} color="blue.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                Documentations
              </Text>
              <Text color="gray.600">Access documentation</Text>
            </Box>
          </Link>
        </GridItem>

        {/* CampusAgile.com Card */}
        <GridItem>
          <Link to="/">
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: 'gray.100',
              }}
            >
              <Center>
                <ExternalLinkIcon boxSize={8} color="blue.500" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold">
                CampusAgile.com
              </Text>
              <Text color="gray.600">Visit CampusAgile website</Text>
            </Box>
          </Link>
        </GridItem>
        </SimpleGrid>
      </Container>
      </Box>
  );
}

export default Home;
