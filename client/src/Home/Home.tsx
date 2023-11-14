import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  SimpleGrid,
  Center,
  Text,
  useColorMode,
  GridItem,
  Button,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan } from '@fortawesome/free-solid-svg-icons';
import {
  faTasks,
  faLayerGroup,
  faCog,
  faUser,
  faLifeRing,
  faUsers,
  faFileAlt,
  faBook,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons';
import HomeNavbar from './HomeNavbar';
import DarkModeIconButton from './DarkMode';
import Chatbot from '../Chatbot';
import Loading from '../OtherComponents/loading';
import {useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';

function Home() {
  const { colorMode } = useColorMode();
  const hoverColor = colorMode === 'dark' ? 'gray.900' : 'gray.100';
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showBetaMessage, setShowBetaMessage] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  


  // Simulate loading for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // Display the loading component
    return (
      <Box>
        <Loading />
      </Box>
    );
  }

  return (
    <Box >
      <Box >
        <Box bg="transparent" pt={4}>
          <HomeNavbar />
        </Box>

        <Container maxW="container.xl" p={4}>
          <Text fontSize="l" fontWeight="bold" mb={4}>
            Switch to
          </Text>
          <DarkModeIconButton position="absolute" top={20} right={6} />

          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4}}
            spacing={4}
            mt={8}
          >
            {/* Kanban Card */}
            <GridItem>
              <Link to="/Project">
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  boxShadow="md"
                  minH="200px"
                  _hover={{
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faTasks} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
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
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faLayerGroup} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
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
                cursor="pointer"
                onClick={() => setShowPopup(true)}
              >
                <Center marginTop="20px">
                  <FontAwesomeIcon icon={faCog} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
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
                background={`rgba(0, 0, 0, ${
                  colorMode === 'dark' ? '0.7' : '0.5'
                })`}
              >
                <Box
                  bg={colorMode === 'dark' ? 'gray.700' : 'gray.100'}
                  p={4}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <FontAwesomeIcon icon={faBan} size="3x" color="red" />
                  <Text fontSize="xl" fontWeight="semibold" mb={4} paddingTop="20px">
                    You do not have access to this page.
                  </Text>
                  <Text mb={4}>Contact the university for more information.</Text>
                  <Button colorScheme="blue" onClick={() => setShowPopup(false)}>
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
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faUser} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
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
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faLifeRing} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
                    CampusAgile Support
                  </Text>
                  <Text color="gray.600">Get help and support</Text>
                </Box>
              </Link>
            </GridItem>

            {/* University Community Card */}
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
                onClick={() => {
                  setShowBetaMessage(true);
                  onOpen();
                }}
              >
                <Center marginTop="20px">
                  <FontAwesomeIcon icon={faUsers} size="2x" color="#007FFF" />
                </Center>
                <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
                  University Community
                </Text>
                <Text color="gray.600">Join the university community</Text>
              </Box>
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Beta Version</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  This feature is currently in beta testing. Are you sure you want to proceed?
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="blue" onClick={() => onClose()}>
                    Cancel
                  </Button>
                  <Link to="/UniversityCommunity">
                    <Button colorScheme="green" ml={3}>
                      OK
                    </Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>

            {/* License Card */}
            <GridItem>
              <Link to="/PersonalLicense">
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  boxShadow="md"
                  minH="200px"
                  _hover={{
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faFileAlt} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
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
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faBook} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
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
                    bg: hoverColor,
                  }}
                >
                  <Center marginTop="20px">
                    <FontAwesomeIcon icon={faExternalLink} size="2x" color="#007FFF" />
                  </Center>
                  <Text mt={2} fontSize="xl" fontWeight="semibold" marginTop="25px">
                    CampusAgile.com
                  </Text>
                  <Text color="gray.600">Visit CampusAgile website</Text>
                </Box>
              </Link>
            </GridItem>
          </SimpleGrid>
        </Container>
        <Chatbot />
      </Box>
    </Box>
  );
}

export default Home;