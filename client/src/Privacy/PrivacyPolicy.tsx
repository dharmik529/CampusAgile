import React from 'react';
import {
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  Box,
} from '@chakra-ui/react';

function PrivacyPolicy() {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={4}>
        CampusAgile Privacy Policy
      </Heading>

      <Text fontSize="lg" mb={4}>
        Effective Date: September 1, 2023
      </Text>

      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 1: Introduction
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              Welcome to CampusAgile! Your privacy is important to us, and we are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you use our platform.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 2: Information We Collect
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              We collect various types of information from users to provide and improve our services. The information we collect includes:
            </Text>
            <Text ml={6}>
              <ul>
                <li>Personal Information: This may include your name, email address, and other contact information when you register for an account or communicate with us.</li>
                <li>Usage Information: We collect data about how you use CampusAgile, including your interactions, projects, and content you submit.</li>
                <li>Device and Log Information: We may collect information about your device, such as its operating system, browser, and IP address.</li>
                <li>Cookies and Tracking Technologies: We use cookies and similar technologies to collect information about your browsing and usage patterns.</li>
              </ul>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 3: How We Use Your Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              We use the information we collect for various purposes, including:
            </Text>
            <Text ml={6}>
              <ul>
                <li>Providing and improving CampusAgile services.</li>
                <li>Customizing and personalizing your experience.</li>
                <li>Communicating with you and responding to your inquiries.</li>
                <li>Enforcing our terms, policies, and legal obligations.</li>
              </ul>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Section 4: How We Share Your Information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              We may share your information with third parties for various purposes, including:
            </Text>
            <Text ml={6}>
              <ul>
                <li>With educational institutions: We may share information with your university or college as required for the provision of our services.</li>
                <li>With service providers: We may engage third-party service providers to assist us in delivering our services.</li>
                <li>For legal reasons: We may share your information when required by law or to protect our rights and interests.</li>
              </ul>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        {/* Add more sections as needed. */}
      </Accordion>
    </Container>
  );
}

export default PrivacyPolicy;
