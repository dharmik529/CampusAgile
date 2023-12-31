import React, { useState } from 'react';
import {
  Box,
  Text,
  Input,
  IconButton,
  Flex,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

function ChatbotInterface() {
  const isDarkMode = useColorModeValue(false, true);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    const newMessages = [...messages, { text: newMessage, isUser: true }];
    setMessages(newMessages);
    setNewMessage('');
  };

  return (
    <Box
      backgroundColor={isDarkMode ? 'gray.600' : 'gray.100'}
      boxShadow="md"
      borderRadius="md"
      p={4}
      w="300px"
      h="400px"
      position="fixed"
      bottom="20px"
      right="20px"
    >
      <Text fontSize="xl" fontWeight="bold" mb={3}>
        Chatbot
      </Text>
      <Box
        backgroundColor={isDarkMode ? 'gray.600' : 'gray.100'}
        borderRadius="md"
        p={3}
        h="calc(100% - 50px)"
        overflowY="auto"
      >
        {messages.map((message, index) => (
          <Flex
            key={index}
            justifyContent={message.isUser ? 'flex-end' : 'flex-start'}
            mb={2}
          >
            {!message.isUser && (
              <Avatar
                size="sm"
                name="Chatbot"
                src="chatbot-avatar.jpg" // Replace with your chatbot avatar image
                mr={2}
              />
            )}
            <Box
              bg={message.isUser ? 'blue.200' : isDarkMode ? 'gray.500' : 'gray.300'}
              color={message.isUser ? 'blue.900' : isDarkMode ? 'white' : 'gray.900'}
              borderRadius="md"
              px={3}
              py={2}
              maxW="70%"
              wordBreak="break-word"
              boxShadow="sm"
            >
              {message.text}
            </Box>
          </Flex>
        ))}
      </Box>
      <Flex mt={2}>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          borderRadius="md"
          mr={2}
        />
        <IconButton
          colorScheme="blue"
          onClick={handleSendMessage}
          aria-label="Send"
          borderRadius="md"
        />
        <IconButton
          icon={<CloseIcon />}
          colorScheme="red"
          aria-label="Close"
          borderRadius="md"
        />
      </Flex>
    </Box>
  );
}

export default ChatbotInterface;
