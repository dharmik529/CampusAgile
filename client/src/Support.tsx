import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  IconButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ArrowBackIcon } from '@chakra-ui/icons';

function Support() {
  return (
    <Container maxW="container.lg" py={8}>
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
        CampusAgile Support
      </Heading>
      <Text fontSize="xl" mb={4}>
        Welcome to CampusAgile Support! Here, you can find answers to common questions.
      </Text>

      {/* FAQ Section */}
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What is CampusAgile?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            CampusAgile is a platform for agile project management and collaboration in educational institutions.
            It helps streamline project workflows, improve team collaboration, and enhance overall project management in educational settings.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I get support?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            You can get support by contacting our support team at <a href="mailto:support@campusagile.com">support@campusagile.com</a>.
            Our support team is available to assist you with any questions or issues you may have.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How can I use Kanban effectively?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            To use Kanban effectively, follow these guidelines:
            <ul>
              <li>Visualize your workflow with a Kanban board.</li>
              <li>Limit work in progress (WIP) to avoid bottlenecks.</li>
              <li>Use swimlanes or columns to organize tasks.</li>
              <li>Regularly review and improve your Kanban process.</li>
            </ul>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How does the business model work?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Our business model relies on subscription-based plans. We offer different pricing tiers with varying features
            to cater to the needs of educational institutions of all sizes. You can find more details on our pricing page.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Who can use CampusAgile, and what can they access?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            CampusAgile is primarily designed for educational institutions, including universities and colleges.
            Users with different roles, such as students, professors, administrators, and project managers, can access
            specific features based on their permissions. For example, students can collaborate on projects, while professors
            and administrators have access to administrative tools.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What are the guidelines for using CampusAgile?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            When using CampusAgile, please follow these guidelines:
            <ul>
              <li>Respect the privacy and data security of other users.</li>
              <li>Do not share login credentials or access with unauthorized individuals.</li>
              <li>Report any issues or inappropriate content to our support team.</li>
            </ul>
            Failure to adhere to these guidelines may result in account suspension or termination.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      {/* Chatbot Section */}
      {/* Create a layout for the chatbot here */}
      
    </Container>
  );
}

export default Support;
