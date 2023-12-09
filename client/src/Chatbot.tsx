import React, { useState } from 'react';
import {
  IconButton,
  Input,
  Text,
  Button,
  Box,
  CloseButton,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { useSpring, animated } from 'react-spring';

const Chatbot: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{ text: string; type: string }[]>([]);

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

  const sendMessage = (text: string, type: string) => {
    if (text.trim() === '') return;
    const newMessage = { text, type };
    setChat((prevChat) => [...prevChat, newMessage]);
    setMessage('');

    if (type === 'user') {
      let botResponse = '';

      // Bot responds based on user input
      const lowercaseText = text.toLowerCase();
      if (lowercaseText.includes('hi') || lowercaseText.includes('hello')) {
        botResponse = 'Hi there! I am AggieBot, here to assist you.';
      }
      else if (lowercaseText.includes('about')) {
        botResponse =
          'AggieBot is a helpful assistant for CampusAgile software.';
      } else if (lowercaseText.includes('features')) {
        botResponse =
          'CampusAgile offers various features like project management, task tracking, and collaboration tools.';
      } else if (lowercaseText.includes('help')) {
        botResponse =
          'I can provide information about CampusAgile features, help with navigation, and more.';
      } else if (lowercaseText.includes('tutorial')) {
        botResponse =
          'CampusAgile tutorials are available on our website. Visit our site to explore!';
      } else if (lowercaseText.includes('dashboard')) {
        botResponse =
          'You can access the CampusAgile dashboard from the main menu.';
      } else if (lowercaseText.includes('projects')) {
        botResponse = 'Manage your projects easily using the Projects section in kanban component.';
      } else if (lowercaseText.includes('documentation')) {
        botResponse =
          'Find comprehensive documentation for CampusAgile in the Documentation section.';
      } else if (lowercaseText.includes('contact')) {
        botResponse =
          'If you need assistance, feel free to contact our support team.';
      }else if (lowercaseText.includes('account') || lowercaseText.includes('info') || lowercaseText.includes('account infornmation')) {
        botResponse =
          'You can check account setting section from home page.';
      }
       else {
        botResponse =
          'You can ask about features, tutorials, projects, documentations, account or help for more information.';
      }

      setTimeout(() => {
        const botMessage = { text: botResponse, type: 'bot' };
        setChat((prevChat) => [...prevChat, botMessage]);
      }, 500); // Delay to simulate a bot response
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(message, 'user');
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
          overflowY: 'auto',
          maxHeight: '500px',
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
          backdropFilter: 'blur(100px)',
          background: "useColorModeValue('white', 'gray.900')",
        }}
      >
        <CloseButton
          position="absolute"
          top="20px"
          right="0px"
          onClick={handleCloseChat}
        />
        <Box
          display="flex"
          flexDirection="column"
          height="calc(100% - 40px)"
          justifyContent="flex-end"
          padding="10px"
        >
          {chat.map((message, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent={
                message.type === 'user' ? 'flex-end' : 'flex-start'
              }
              marginBottom="10px"
            >
              <Text
                p="10px"
                borderRadius="8px"
                maxWidth="70%"
                bg={message.type === 'user' ? 'blue.100' : 'gray.100'}
                color={message.type === 'user' ? 'blue.700' : 'gray.700'}
                textAlign={message.type === 'user' ? 'right' : 'left'}
              >
                {message.text}
              </Text>
            </Box>
          ))}
        </Box>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', padding: '10px' }}
        >
          <Input
            flex="1"
            placeholder="Type your message..."
            value={message}
            onChange={handleInputChange}
            autoFocus
          />
          <Button type="submit" colorScheme="blue" marginLeft="10px">
            Send
          </Button>
        </form>
      </animated.div>
    </>
  );
};

export default Chatbot;
