import React, { useState } from 'react';
import {
  Box,
  Text,
  Input,
  IconButton,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import { CloseIcon, SendIcon } from '@chakra-ui/icons';

function ChatbotInterface() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    // Implement logic to send a message
    const newMessages = [...messages, { text: newMessage, isUser: true }];
    setMessages(newMessages);
    setNewMessage('');
  };

  return (
    <Box
      bg="white"
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
        bg="gray.100"
        borderRadius="md"
        p={3}
        h="calc(100% - 50px)"
        overflowY="auto"
      >
        {messages.map((message, index) => (
          <Flex key={index} justifyContent={message.isUser ? 'flex-end' : 'flex-start'}>
            {!message.isUser && (
              <Avatar
                size="sm"
                name="Chatbot"
                src="chatbot-avatar.jpg"
                mr={2}
              />
            )}
            <Box
              bg={message.isUser ? 'blue.200' : 'gray.300'}
              color={message.isUser ? 'blue.900' : 'gray.900'}
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
          icon={<SendIcon />}
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
