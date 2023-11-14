/* eslint-disable react/prop-types */
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Stack,
  Avatar,
  Box,
  Divider,
  VStack,
  HStack,
  Image,
} from '@chakra-ui/react';

const Team = ({ isOpen, onClose, projectTitle, teamMembers }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
          Team Members - {projectTitle}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4} align="start">
            {teamMembers.map((member) => (
              <Box
                key={member.id}
                p={4}
                shadow="md"
                borderWidth="1px"
                borderRadius="lg"
                w="100%"
                cursor="pointer"
                _hover={{ shadow: 'lg' }}
              >
                <HStack align="start">
                  <Avatar
                    name={member.name}
                    size="lg"
                    src={member.avatar}
                    showBorder
                    borderColor="white"
                  />
                  <Stack>
                    <Text fontSize="xl" fontWeight="bold">
                      {member.name}
                    </Text>
                    <Text color="gray.500" fontSize="md">
                      {member.role}
                    </Text>
                  </Stack>
                </HStack>
                <Divider my={3} />
                <Text fontSize="md" color="gray.600">
                  {member.bio}
                </Text>
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Team;
