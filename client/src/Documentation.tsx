import React from 'react';
import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  List,
  ListItem,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react'; // Import useColorMode

function Documentation() {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} // Use colorMode for background
      paddingBottom="75px"
    >
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        maxW="800px"
        margin="0 auto"
        bg={colorMode === 'dark' ? 'gray.700' : 'white'} // Use colorMode for background
        mt={8}
      >
        <Heading as="h1" size="xl" mb={4}>
          CampusAgile Software Documentation
        </Heading>

        <Heading as="h2" size="lg" mb={2}>
          Kanban Board
        </Heading>
        <Text fontSize="lg" mb={4}>
          The Kanban board is a visual tool for managing tasks and workflows. It
          allows you to create, prioritize, and track tasks in various stages of
          completion. The Kanban board can be accessed{' '}
          <ChakraLink as={Link} to="/kanban" color="teal.500" fontWeight="bold">
            here
          </ChakraLink>
          .
        </Text>
        <Text fontSize="lg" mb={4}>
          The Kanban board is a powerful tool that helps
          teams visualize their work and workflow. It allows teams to track the
          progress of tasks as they move through different stages, such as "To
          Do," "In Progress," and "Done." You can easily create new tasks, drag
          and drop them between columns, and prioritize them according to your
          needs.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          Scrum Notes
        </Heading>
        <Text fontSize="lg" mb={4}>
          Scrum Notes is a feature that enables you to keep track of important
          notes and updates related to your Agile development process. You can
          add, edit, and delete notes as needed. Learn more about Scrum Notes{' '}
          <ChakraLink
            as={Link}
            to="/scrum"
            color="teal.500"
            fontWeight="bold"
          >
            here
          </ChakraLink>
          .
        </Text>
        <Text fontSize="lg" mb={4}>
          Scrum Notes is a valuable tool for Agile teams
          to capture important information during their development process.
          With Scrum Notes, you can document discussions, decisions, and updates
          related to your project. Each note is timestamped, making it easy to
          track the history of your project.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          CampusAgile Software
        </Heading>
        <Text fontSize="lg" mb={4}>
          CampusAgile is a comprehensive software suite designed to support
          university communities in their Agile development processes. It
          includes tools such as the Kanban board and Scrum Notes to facilitate
          Agile project management. Visit the{' '}
          <ChakraLink
            href="https://www.campusagile.com"
            isExternal
            color="teal.500"
            fontWeight="bold"
          >
            CampusAgile official website
          </ChakraLink>{' '}
          for more information.
        </Text>
        <Text fontSize="lg" mb={4}>
          Page-Long Information: CampusAgile is an all-in-one solution for
          university communities looking to streamline their Agile development
          practices. With a user-friendly interface, it offers tools like the
          Kanban board and Scrum Notes to enhance project management. CampusAgile
          aims to promote collaboration and efficiency within university
          settings.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          Additional Resources
        </Heading>
        <List spacing={2} fontSize="lg">
          <ListItem>
            <ChakraLink
              as={Link}
              to="/kanban"
              color="teal.500"
              fontWeight="bold"
            >
              Kanban Board User Guide
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={Link}
              to="/scrum"
              color="teal.500"
              fontWeight="bold"
            >
              Scrum Notes User Guide
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              href="https://www.campusagile.com"
              isExternal
              color="teal.500"
              fontWeight="bold"
            >
              CampusAgile.com - Official Website
            </ChakraLink>
          </ListItem>
        </List>

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
      </Box>
    </Flex>
  );
}

export default Documentation;
