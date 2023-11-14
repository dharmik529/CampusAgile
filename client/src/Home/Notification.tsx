import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  VStack,
  useColorMode,
  Divider,
  Container,
  Flex,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import HomeNavbar from './HomeNavbar';
import DarkModeIconButton from './DarkMode';
import Loading from '../OtherComponents/loading';

const Notification: React.FC = () => {
  const { colorMode } = useColorMode();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [notifications, setNotifications] = useState([]); // Add notifications state

  // Simulate loading for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const storedFullName = localStorage.getItem('fullName') || '';
      const splitNames = storedFullName.split(' ');
      const formattedFirstName =
        splitNames.length > 0
          ? splitNames[0].charAt(0).toUpperCase() + splitNames[0].slice(1)
          : '';
      setFirstName(formattedFirstName);

      // Fetch scrum notifications from localStorage
      const scrumNotificationString = localStorage.getItem('scrumNotification');
      const scrumNotification = scrumNotificationString
        ? JSON.parse(scrumNotificationString)
        : null;

      // Fetch project notifications from localStorage
      const projectNotificationString = localStorage.getItem('projectNotification');
      const projectNotification = projectNotificationString
        ? JSON.parse(projectNotificationString)
        : null;

      // Combine both scrum and project notifications
      const allNotifications = [];
      if (scrumNotification) allNotifications.push(scrumNotification);
      if (projectNotification) allNotifications.push(projectNotification);

      setNotifications(allNotifications);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleDeleteNotification = (id) => {
    // Filter out the notification with the specified id
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== id
    );

    // Update the state and localStorage
    setNotifications(updatedNotifications);
    localStorage.setItem(
      'scrumNotification',
      JSON.stringify(
        updatedNotifications.find((n) => n.type === 'scrum') || null
      )
    );
    localStorage.setItem(
      'projectNotification',
      JSON.stringify(
        updatedNotifications.find((n) => n.type === 'project') || null
      )
    );
  };

  if (isLoading) {
    // Display the loading component
    return (
      <Box>
        <Loading />
      </Box>
    );
  }

  return (
    <Box>
      <Box bg="transparent" pt={4}>
        <HomeNavbar />
      </Box>

      <Container maxW="container.xl" p={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="l" fontWeight="bold" mb={4}>{`Hi ${firstName}!`}</Text>
        </Flex>
        <DarkModeIconButton position="absolute" top={20} right={6} />

        <Divider mb={4} />

        <VStack spacing={4} align="start">
          {notifications.length === 0 ? (
            <Text>No notifications to show.</Text>
          ) : (
            notifications.map((notification) => (
              <Box
                key={notification.id}
                p={4}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="md"
                w="100%"
                position="relative"
              >
                <IconButton
                  icon={<CloseButton />}
                  aria-label="Delete Notification"
                  size="sm"
                  position="absolute"
                  top={3}
                  right={3}
                  onClick={() => handleDeleteNotification(notification.id)}
                />
                <Text>{notification.text}</Text>
              </Box>
            ))
          )}
        </VStack>
      </Container>
    </Box>
  );
};

export default Notification;
