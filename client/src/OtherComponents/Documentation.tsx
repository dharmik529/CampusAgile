/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Box,
  Heading,
  Text,
  Link as ChakraLink,
  List,
  ListItem,
  useColorModeValue,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
function Documentation() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      marginTop="3%"
      marginBottom="3%"
      bgColor={useColorModeValue('white', 'gray.800')}
      paddingBottom="75px"
    >
      <Box
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        maxW="800px"
        margin="0 auto"
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        mt={8}
      >
        <Heading as="h1" size="xl" mb={8} mt={7} style={{ textAlign: 'center' }} >
          CampusAgile Software Documentation
        </Heading>

        <Heading as="h2" size="lg" mb={2}>
          Kanban Board
        </Heading>
        <Text fontSize="lg" mb={4}>
          The Kanban board is an instrumental tool that empowers cross-functional teams to meticulously orchestrate and streamline their tasks. This dynamic tool fosters seamless task management, enabling team members to collaborate on coding and file-sharing projects. Users can ingeniously create multiple projects with diverse teams and effortlessly track progress across various project phases.

          One of the standout features of the Kanban board is its ability to facilitate code collaboration and file sharing. Team members can seamlessly integrate their coding efforts and share files in various formats, making it easy for team members to review and download resources.

          Here's how you can leverage these features:
        </Text>
        <List spacing={2} fontSize="lg">
          <ListItem>
            <b>Agile Project Management:</b> The Kanban board is at the heart of Agile project management. It provides a visual representation of project tasks categorized into stages like "To Do," "In Progress," and "Done." This allows team members to monitor the project's progress at a glance and make informed decisions about task priorities and timelines.
          </ListItem>
          <ListItem>
            <b>Effortless Task Management:</b> The Kanban board's drag-and-drop functionality simplifies task management. Team members can effortlessly move tasks from one stage to another, reflecting their current status. This intuitive approach keeps everyone on the same page and ensures a seamless workflow.
          </ListItem>
          <ListItem>
            <b>Collaborative Code Development:</b> Collaborative coding is streamlined with code tasks on the Kanban board. Team members can work together on code projects, perform code reviews, and track changes, all within the Kanban environment.
          </ListItem>
          <ListItem>
            <b>Flexible File Sharing:</b> The Kanban board supports file sharing in various formats. Team members can easily attach and share project-related documents, design files, and more. This enhances transparency and collaborative efforts.
          </ListItem>
          <ListItem>
            <b>Real-time Progress Tracking:</b> The Kanban board provides real-time insights into project progress. With tasks moving from "To Do" to "In Progress" and ultimately to "Done," everyone can visualize how the project is advancing.
          </ListItem>
        </List>
        <Text fontSize="lg" mb={4}>
          The Kanban board's Agile project management capabilities, coupled with code collaboration and file sharing features, offer an all-encompassing solution for teams. It's a central hub for monitoring project tasks, ensuring efficient code development, and facilitating smooth file-sharing practices.
        </Text>


        <Heading as="h2" size="lg" mb={2}>
          Scrum Notes
        </Heading>
        <Text fontSize="lg" mb={4}>
          Scrum Notes emerges as a pivotal feature specifically tailored to cater to the discerning needs of project managers. It serves as a centralized repository for the meticulous documentation of project-related decisions, updates, and discussions. Project managers can wield this feature to cultivate a historical record of project activities and facilitate seamless communication within agile teams. Dive into the world of Scrum Notes{' '}
          <ChakraLink
            as={Link}
            to="/scrum"
            color="#007FFF"
            fontWeight="bold"
          >
            here
          </ChakraLink>
          .
        </Text>
        <Text fontSize="lg" mb={4}>
          Scrum Notes facilitates a meticulously structured repository for capturing and preserving the historical tapestry of project activities. This feature plays a pivotal role in enabling robust communication among Agile teams, ensuring that every team member remains abreast of the latest project developments and transitions.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          AI Chatbot
        </Heading>
        <Text fontSize="lg" mb={4}>
          Our cutting-edge AI chatbot represents the next frontier in project management and collaboration. This intelligent assistant is designed to make your experience with CampusAgile even more seamless and productive. The AI chatbot is your trusted partner, offering a wide range of features and capabilities.

          With the AI chatbot, you can automate routine tasks, manage your projects more efficiently, and receive real-time updates and suggestions. Here's a glimpse of what the AI chatbot can do for you:
        </Text>
        <List spacing={2} fontSize="lg">
          <ListItem>
            <b>Task Automation:</b> The chatbot can handle repetitive and time-consuming tasks for you, allowing you to focus on higher-level responsibilities. It can create tasks, assign them to team members, and update task statuses automatically.
          </ListItem>
          <ListItem>
            <b>Real-time Updates:</b> Stay informed about project progress with real-time updates. The chatbot can provide status reports, notify you about completed tasks, and alert you to any potential bottlenecks.
          </ListItem>
          <ListItem>
            <b>Suggestions and Insights:</b> Benefit from the chatbot's intelligent insights. It can analyze project data and provide suggestions for optimizing workflows, prioritizing tasks, and improving collaboration.
          </ListItem>
          <ListItem>
            <b>Collaborative Assistance:</b> The chatbot fosters collaboration by allowing team members to interact with it directly. You can assign tasks, request information, and even engage in group discussions with the chatbot's assistance.
          </ListItem>
          <ListItem>
            <b>Help and Guidance:</b> Whether you're new to CampusAgile or a seasoned user, the chatbot is there to help. It can answer your questions, provide step-by-step guidance, and offer tips for getting the most out of the platform.
          </ListItem>
        </List>
        <Text fontSize="lg" mb={4}>
          The AI chatbot is an integral part of the CampusAgile ecosystem, simplifying complex processes and enhancing your overall experience. It's like having a dedicated project management assistant available 24/7, ready to assist you with any task or challenge you encounter.
        </Text>


        <Heading as="h2" size="lg" mb={2}>
          CampusAgile Software
        </Heading>
        <Text fontSize="lg" mb={4}>
          CampusAgile stands as a comprehensive and tailored software suite, meticulously crafted to cater to the unique requirements of academic communities in their Agile-driven development endeavors. This versatile suite incorporates potent tools, such as the Kanban board and Scrum Notes, that work in unison to deftly streamline project management and collaboration. For in-depth insights and comprehensive details, feel free to explore the{' '}
          <ChakraLink
            href="https://www.campusagile.com"
            isExternal
            color="#007FFF"
            fontWeight="bold"
          >
            CampusAgile official website
          </ChakraLink>
          .
        </Text>
        <Text fontSize="lg" mb={4}>
          CampusAgile has been meticulously designed as a holistic solution tailored to empower academic communities in the quest to optimize their Agile development practices. Featuring an intuitive user interface, CampusAgile empowers teams to effectively collaborate, manage their projects, and enhance overall efficiency within academic settings.
        </Text>

        <Heading as="h2" size="lg" mb={2}>
          Additional Resources
        </Heading>
        <List spacing={2} fontSize="lg">
          <ListItem>
            <ChakraLink
              as={Link}
              to="/kanban"
              color="#007FFF"
              fontWeight="bold"
            >
              Kanban Board User Guide
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              as={Link}
              to="/scrum"
              color="#007FFF"
              fontWeight="bold"
            >
              Scrum Notes User Guide
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              href="https://www.campusagile.com"
              isExternal
              color="#007FFF"
              fontWeight="bold"
            >
              CampusAgile.com - Official Website
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink 
              // as={Link} 
              // to="../team" 
              href="https://team.deeppatel.tech"
              target="_blank"
              color="#007FFF" 
              fontWeight="bold"
            >
              Meet Our Team!!
            </ChakraLink>
          </ListItem>
        </List>

        <IconButton
          as={Link}
          to="/home"
          bottom="20px"
          right="20px"
          icon={<ArrowBackIcon />}
          zIndex="999"
          aria-label="Home"
          size="md"
          colorScheme="blue"
          mt={4}
          position="fixed"
        />
      </Box>
    </Flex>
  );
}

export default Documentation;
