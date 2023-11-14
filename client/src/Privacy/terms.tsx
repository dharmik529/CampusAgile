import React from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

function Terms() {
  return (
    <Container maxW="container.lg" py={8}>
      <Heading as="h1" mb={4}>
        CampusAgile Terms of Use 
      </Heading>

      <Text fontSize="lg" mb={4}>
        Welcome to CampusAgile, your go-to platform for real-world project management experience. Before you get started, please take a moment to review our terms of use.
      </Text>

        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 1: Acceptance of Terms
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                Welcome to CampusAgile! By accessing or using the CampusAgile platform, you agree to 
                comply with and be bound by these Terms of Use. These terms outline the rules and 
                guidelines that govern your use of our platform, so please take a moment to review 
                them carefully. If you do not agree with these terms or any part of them, we kindly 
                request that you do not use the CampusAgile platform.
              </Text>
              <Text>
                Your use of CampusAgile indicates your acceptance of these terms and your commitment 
                to abide by them while engaging with our platform. We may periodically update these 
                terms, so it is essential to check back regularly to stay informed of any changes. 
                If you continue to use CampusAgile after any modifications to the terms, it signifies 
                your acceptance of the updated terms and agreement to be bound by them.
              </Text>
              <Text>
                CampusAgile is dedicated to providing university students, faculty, and staff with a 
                valuable platform for real-world project management experience. To ensure a secure 
                and productive environment for all users, these terms establish the foundation of our 
                community standards and expectations. We encourage open communication, collaboration, 
                and respectful engagement among our users, all in alignment with these terms and our 
                shared commitment to academic excellence.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 2: Eligibility
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                CampusAgile is designed exclusively for individuals who are part of the academic community, 
                including university students, faculty, and staff. To use our platform, you must be 
                eligible to participate in university programs. We take pride in fostering a learning-centric 
                environment where educational institutions and their members can benefit from the features 
                and tools we offer.
              </Text>
              <Text>
                Students, as the primary audience of CampusAgile, can leverage the platform to gain 
                real-world project management experience, collaborate on tasks, and enhance their 
                organizational skills. Faculty members and staff can use the platform to facilitate 
                project-based learning, streamline communication, and support students growth.
              </Text>
              <Text>
                We believe that education is a transformative journey, and CampusAgile is here 
                to complement and enrich that journey. By joining our platform, eligible users 
                can access a range of features and resources carefully curated to enhance their 
                academic experience and provide a foundation for success in the professional 
                world. We encourage eligible individuals to embrace the opportunities that 
                CampusAgile offers and make the most of their educational journey.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 3: User Responsibilities
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                Users are responsible for maintaining the confidentiality of their accounts, project data, and communications on CampusAgile. You agree not to engage in any activities that may compromise the platform security or integrity.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 4: Intellectual Property
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                All content and materials provided on CampusAgile, including but not limited to text, images, software, and documentation, are the property of CampusAgile and protected by intellectual property laws. Users may not reproduce, distribute, or modify these materials without prior written consent.
              </Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  Section 5: Termination
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text>
                CampusAgile reserves the right to terminate or suspend user accounts that violate these terms or engage in abusive or fraudulent activities. Users may also terminate their accounts at any time by contacting our support team.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Container>
  );
}

export default Terms;
