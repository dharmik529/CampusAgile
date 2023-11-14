import React, { useState } from 'react';
import {
  IconButton,
  Input,
  Text,
  Button,
  Box,
  CloseButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useSpring, animated } from 'react-spring';

const Chatbot: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<string[]>([]);

  // Define spring animations for chat panel height and opacity
  const chatPanelAnimation = useSpring({
    height: isExpanded ? '500px' : '0px',
    opacity: isExpanded ? 1 : 0,
  });

  const toggleChat = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCloseChat = () => {
    setIsExpanded(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    if (message.trim() === '') return;

    // Add the user's message to the chat
    setChat([...chat, `${message} 🔹`]);
    // Here you can send the message to your chatbot API and handle the response.

    // Clear the message input field
    setMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission
    sendMessage(); // Call your sendMessage function to send the message
  };

  return (
    <>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        zIndex="999"
        display="flex"
        flexDirection="column-reverse"
      >
        <IconButton
          onClick={toggleChat}
          colorScheme="blue"
          aria-label="Open Chat"
          icon={<ChatIcon w={6} h={6} />}
        />
      </Box>
      <animated.div
        style={{
          ...chatPanelAnimation,
          width: '350px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 'md',
          padding: '4px',
          paddingTop: '38px',
          position: 'fixed',
          bottom: '65px',
          right: '10px',
          flexDirection: 'column-reverse',
          background:  "useColorModeValue('white', 'gray.700')",
        }}
      >

        <CloseButton
          position="absolute"
          top="10px"
          right="10px"
          onClick={handleCloseChat}
        />
        <Stack spacing={2} h="calc(100% - 40px)" overflowY="auto" align="flex-end" paddingRight='10px' justifyContent='end' paddingBottom='10px'>
          {chat.map((message, index) => (
            <Text key={index}>{message}</Text>
          ))}
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack direction="row" align="flex-end">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={handleInputChange}
              autoFocus
            />
            <Button
              type="submit"
              colorScheme="blue"
            >
              Send
            </Button>
          </Stack>
        </form>
      </animated.div>
    </>
  );
};

export default Chatbot;
