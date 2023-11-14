import React, { useState } from 'react';
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
  Image,
  Avatar,
  HStack,
  useColorModeValue,
  Button,
  Card,
  CardHeader,
  Select,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
  Input,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon, AddIcon } from '@chakra-ui/icons';

function UniversityCommunity() {
  const { colorMode } = useColorMode();
  const [selectedSection, setSelectedSection] = useState('University Groups');
  const [isAddPostModalOpen, setAddPostModalOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const openAddPostModal = () => {
    setAddPostModalOpen(true);
  };

  const closeAddPostModal = () => {
    setAddPostModalOpen(false);
  };

  const handlePostSubmit = () => {
    const newPost = {
      title: postTitle,
      content: postContent,
      section: selectedSection,
    };

    setPosts([...posts, newPost]);

    setPostTitle('');
    setPostContent('');
    setAddPostModalOpen(false);
  };

  // State for the uploaded image and its visibility
  const [postImage, setPostImage] = useState(null);
  const [showPostImage, setShowPostImage] = useState(false);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setPostImage(URL.createObjectURL(file));
    setShowPostImage(true);
  };

  // Function to reset the image visibility
  const resetImageUpload = () => {
    setPostImage(null);
    setShowPostImage(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgColor={useColorModeValue('whte', 'gray.800')}
    >
      <Container
        marginTop="5%"
        marginBottom="5%"
        maxW="container.lg"
        py={8}
        borderRadius="10px"
        textAlign="center"
        position="relative"
        transition="0.3s all"
        bg="transparent"
        pt={12}
        pb={12}
      >
      <IconButton
        bottom="20px"
        right="20px"
        icon={<ArrowBackIcon />}
        zIndex="999"
        aria-label="Home"
        size="md"
        colorScheme="blue"
        mt={4}
        position="fixed"
        onClick={openModal}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal} size="md">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Give Us Feedback</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg" mb={4}>
              We'd love to hear your feedback! Please click the button below to provide your input.
            </Text>
            <HStack spacing={4} justifyContent="flex-end">
              <Button
                as={Link}
                to="/feedback"
                target="_blank"
                colorScheme="blue"
              >
                Provide Feedback
              </Button>
              <Button
                as={Link}
                to="/home"
                colorScheme="green"
              >
                Home
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>

        <Heading as="h1" mb={4}>
          University Community
        </Heading>
        <Text fontSize="xl" mb={4}>
          Welcome to the CampusAgile University Community! Connect with fellow members and explore our community resources.
        </Text>

        <Flex justifyContent="center" flexWrap="wrap">
          <Circle
            style={buttonStyle}
            onClick={() => setSelectedSection('University Groups')}
            bgColor={selectedSection === 'University Groups' ? 'blue.500' : 'gray.200'}
            color={selectedSection === 'University Groups' ? 'white' : 'black'}
          >
            <Text fontSize="md" fontWeight="bold">
              University Groups
            </Text>
          </Circle>

          <Circle
            style={buttonStyle}
            onClick={() => setSelectedSection('Ongoing Projects')}
            bgColor={selectedSection === 'Ongoing Projects' ? 'blue.500' : 'gray.200'}
            color={selectedSection === 'Ongoing Projects' ? 'white' : 'black'}
          >
            <Text fontSize="md" fontWeight="bold">
              Ongoing Projects
            </Text>
          </Circle>

          <Circle
            style={buttonStyle}
            onClick={() => setSelectedSection('Recents')}
            bgColor={selectedSection === 'Recents' ? 'blue.500' : 'gray.200'}
            color={selectedSection === 'Recents' ? 'white' : 'black'}
          >
            <Text fontSize="md" fontWeight="bold">
              Recents
            </Text>
          </Circle>

          <Circle
            style={buttonStyle}
            onClick={() => setSelectedSection('Trending Projects')}
            bgColor={selectedSection === 'Trending Projects' ? 'blue.500' : 'gray.200'}
            color={selectedSection === 'Trending Projects' ? 'white' : 'black'}
          >
            <Text fontSize="md" fontWeight="bold">
              Trending Projects
            </Text>
          </Circle>
        </Flex>

        <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
          variant="solid"
          marginTop="2%"
          onClick={openAddPostModal}
        >
          Create Post
        </Button>

        <Divider my={8} />

        {selectedSection === 'University Groups' && (
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
            <Card
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              borderColor="transparent"
              bgColor={useColorModeValue('gray.50', 'gray.900')}
            >
              <CardHeader>
                <HStack spacing="4">
                  <Avatar name="Group 1" />
                  <Text fontWeight="bold">Group 1</Text>
                </HStack>
              </CardHeader>
              <CardBody>
                {/* Display the uploaded image if showPostImage is true */}
                {showPostImage && (
                  <Image src={postImage} alt="Group 1" mb={2} w="100%" h="150px" />
                )}
                <Text>Join this university group to connect with students and professors.</Text>
              </CardBody>
              <CardFooter justify="space-between">
                <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                  Read More
                </Button>
              </CardFooter>
            </Card>
            {posts
              .filter((post) => post.section === 'University Groups')
              .map((post, index) => (
                <Card
                  key={index}
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                  borderColor="transparent"
                  bgColor={useColorModeValue('gray.50', 'gray.900')}
                >
                  <CardHeader>
                    <HStack spacing="4">
                      <Avatar name={`Group ${index + 1}`} />
                      <Text fontWeight="bold">{`Group ${index + 1}`}</Text>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Image src={`group${index + 1}-image.jpg`} alt={`Group ${index + 1}`} mb={2} />
                    <Text>{post.content}</Text>
                  </CardBody>
                  <CardFooter justify="space-between">
                    <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </Box>
        )}

        {selectedSection === 'Ongoing Projects' && (
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
            <Card
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              borderColor="transparent"
              bgColor={useColorModeValue('gray.50', 'gray.900')}
            >
              <CardHeader>
                <HStack spacing="4">
                  <Avatar name="Project 1" />
                  <Text fontWeight="bold">Project 1</Text>
                </HStack>
              </CardHeader>
              <CardBody>
                {showPostImage && (
                  <Image src={postImage} alt="Group 1" mb={2} w="100%" h="150px" />
                )}
                <Text>Explore ongoing research projects in various fields of study.</Text>
              </CardBody>
              <CardFooter justify="space-between">
                <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                  Read More
                </Button>
              </CardFooter>
            </Card>
            {posts
              .filter((post) => post.section === 'Ongoing Projects')
              .map((post, index) => (
                <Card
                  key={index}
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                  borderColor="transparent"
                  bgColor={useColorModeValue('gray.50', 'gray.900')}
                >
                  <CardHeader>
                    <HStack spacing="4">
                      <Avatar name={`Project ${index + 1}`} />
                      <Text fontWeight="bold">{`Project ${index + 1}`}</Text>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Text>{post.content}</Text>
                  </CardBody>
                  <CardFooter justify="space-between">
                    <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </Box>
        )}

        {selectedSection === 'Recents' && (
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
            <Card
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              borderColor="transparent"
              bgColor={useColorModeValue('gray.50', 'gray.900')}
            >
              <CardHeader>
                <HStack spacing="4">
                  <Avatar name="Recent Post 1" />
                  <Text fontWeight="bold">Recent Post 1</Text>
                </HStack>
              </CardHeader>
              <CardBody>
                {showPostImage && (
                  <Image src={postImage} alt="Group 1" mb={2} w="100%" h="150px" />
                )}
                <Text>Check out the latest updates on upcoming campus events.</Text>
              </CardBody>
              <CardFooter justify="space-between">
                <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                  Read More
                </Button>
              </CardFooter>
            </Card>
            {posts
              .filter((post) => post.section === 'Recents')
              .map((post, index) => (
                <Card
                  key={index}
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                  borderColor="transparent"
                  bgColor={useColorModeValue('gray.50', 'gray.900')}
                >
                  <CardHeader>
                    <HStack spacing="4">
                      <Avatar name={`Recent Post ${index + 1}`} />
                      <Text fontWeight="bold">{`Recent Post ${index + 1}`}</Text>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Text>{post.content}</Text>
                  </CardBody>
                  <CardFooter justify="space-between">
                    <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </Box>
        )}

        {selectedSection === 'Trending Projects' && (
          <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={4}>
            <Card
              maxW="md"
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
              borderColor="transparent"
              bgColor={useColorModeValue('gray.50', 'gray.900')}
            >
              <CardHeader>
                <HStack spacing="4">
                  <Avatar name="Trending Project 1" />
                  <Text fontWeight="bold">Trending Project 1</Text>
                </HStack>
              </CardHeader>
              <CardBody>
                {showPostImage && (
                  <Image src={postImage} alt="Group 1" mb={2} w="100%" h="150px" />
                )}
                <Text>Explore the most popular and innovative projects in our community.</Text>
              </CardBody>
              <CardFooter justify="space-between">
                <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                  Read More
                </Button>
              </CardFooter>
            </Card>
            {posts
              .filter((post) => post.section === 'Trending Projects')
              .map((post, index) => (
                <Card
                  key={index}
                  maxW="md"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
                  borderColor="transparent"
                  bgColor={useColorModeValue('gray.50', 'gray.900')}
                >
                  <CardHeader>
                    <HStack spacing="4">
                      <Avatar name={`Trending Project ${index + 1}`} />
                      <Text fontWeight="bold">{`Trending Project ${index + 1}`}</Text>
                    </HStack>
                  </CardHeader>
                  <CardBody>
                    <Text>{post.content}</Text>
                  </CardBody>
                  <CardFooter justify="space-between">
                    <Button colorScheme="blue" variant="ghost" position="relative" right={-167}>
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </Box>
        )}

        <Modal isOpen={isAddPostModalOpen} onClose={closeAddPostModal}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add a Post</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select
                placeholder="Select a Section"
                mb={4}
                value={selectedSection}
                onChange={(e) => {
                  setSelectedSection(e.target.value);
                  // Reset the image visibility when changing sections
                  resetImageUpload();
                }}
              >
                <option value="University Groups">University Groups</option>
                <option value="Ongoing Projects">Ongoing Projects</option>
                <option value="Recents">Recents</option>
                <option value="Trending Projects">Trending Projects</option>
              </Select>
              <Input
                placeholder="Title"
                mb={4}
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
              /> 

              <FormControl mb={4}>
                <FormLabel htmlFor="Description">Description</FormLabel>
                <Textarea
                  id="content"
                  placeholder="Content"
                  size="md"
                  resize="vertical"
                  minH="200px"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                />
              </FormControl>
              {/* Add an image upload input field */}
              <Input type="file" accept="image/*" onChange={handleImageUpload} mb={4} />
              {/* Display the uploaded image preview */}
              {postImage && (
                <Image src={postImage} alt="Uploaded Image" mb={4} w="100%" h="150px" />
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={2} onClick={closeAddPostModal}>
                Close
              </Button>
              <Button colorScheme="blue" onClick={handlePostSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
}

export default UniversityCommunity;
