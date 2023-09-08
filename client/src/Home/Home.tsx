import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  SimpleGrid,
  Center,
  GridItem,
  Text,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons'; // Replace with the appropriate icon
import {
  faTasks,        // Replace with the appropriate icon for Kanban
  faLayerGroup,   // Replace with the appropriate icon for Scrum
  faCog,          // Replace with the appropriate icon for Administration
  faUser,         // Replace with the appropriate icon for Account Setting
  faLifeRing,     // Replace with the appropriate icon for CampusAgile Support
  faUsers,        // Replace with the appropriate icon for University Community
  faFileAlt,      // Replace with the appropriate icon for License
  faBook,         // Replace with the appropriate icon for Documentations
  faExternalLink, // Replace with the appropriate icon for CampusAgile.com
} from '@fortawesome/free-solid-svg-icons';
import HomeNavbar from './HomeNavbar';
import DarkModeIconButton from './DarkMode';

function Home() {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === 'dark' ? 'gray.900' : 'gray.100';
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Box>
      <Box bg="transparent" pt={4}>
        <HomeNavbar />
      </Box>

      <Container maxW="container.xl" p={4}>
        <Text fontSize="l" fontWeight="bold" mb={4}>
          Switch to
        </Text>
        <DarkModeIconButton position="absolute" top={20} right={6} />

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {/* Kanban Card */}
          <GridItem>
            <Link to="/kanban">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                minH="200px"
                _hover={{
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faTasks} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
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
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faLayerGroup} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
                  Scrum
                </Text>
                <Text color="gray.600">Scrum framework for agile development</Text>
              </Box>
            </Link>
          </GridItem>

          {/* Administration Card */}
          <GridItem>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              boxShadow="md"
              minH="200px"
              _hover={{
                bg: hoverColor,
              }}
              onClick={() => setShowPopup(true)}
            >
              <Center marginTop='20px'>
                <FontAwesomeIcon icon={faCog} size="2x" color="#007FFF" />
              </Center>
              <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
                Administration
              </Text>
              <Text color="gray.600">Manage system administration</Text>
            </Box>
          </GridItem>
          {showPopup && (
          <Box
            position="fixed"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="999"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            background={`rgba(0, 0, 0, ${colorMode === 'dark' ? '0.7' : '0.5'})`}
          >
            <Box
              bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}              
              p={4}
              borderRadius="lg"
              boxShadow="md"
              textAlign="center"

            >
              <FontAwesomeIcon icon={faBan} size="3x" color="red"/> {/* Adjust size and color as needed */}
              <Text fontSize="xl" fontWeight="semibold" mb={4} paddingTop= '20px'>
                You do not have access to this page.
              </Text>
              <Text mb={4}>
                Contact the university for more information.
              </Text>
              <Button
                colorScheme="blue"
                onClick={() => setShowPopup(false)}
              >
                Close
              </Button>
            </Box>
          </Box>
        )}
              
          {/* Account Setting Card */}
          <GridItem>
            <Link to="/AccountSetting">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                minH="200px"
                _hover={{
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faUser} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
                  Account Setting
                </Text>
                <Text color="gray.600">Update your account settings</Text>
              </Box>
            </Link>
          </GridItem>

          {/* CampusAgile Support Card */}
          <GridItem>
            <Link to="/Support">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                minH="200px"
                _hover={{
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faLifeRing} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
                  CampusAgile Support
                </Text>
                <Text color="gray.600">Get help and support</Text>
              </Box>
            </Link>
          </GridItem>

          {/* University Community Card */}
          <GridItem>
            <Link to="/UniversityCommunity">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                minH="200px"
                _hover={{
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faUsers} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
                  University Community
                </Text>
                <Text color="gray.600">Join the university community</Text>
              </Box>
            </Link>
          </GridItem>

          {/* License Card */}
          <GridItem>
            <Link to="/License">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                boxShadow="md"
                minH="200px"
                _hover={{
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faFileAlt} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
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
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faBook} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
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
                  bg: hoverColor, // Updated hover color
                }}
              >
                <Center marginTop='20px'>
                  <FontAwesomeIcon icon={faExternalLink} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop='25px'>
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

