import React, { useState, useEffect } from 'react';
import {
  Flex,
  IconButton,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Box,
  Divider,
  useColorMode,
} from '@chakra-ui/react';
import { SettingsIcon, QuestionOutlineIcon, BellIcon } from '@chakra-ui/icons'; // Import icons from Chakra UI
import { Link, useNavigate } from 'react-router-dom';

function HomeNavbar() {
  const navbarStyle = {
    borderBottom: '0.1px solid #e2e8f0', // Add a bottom border with the desired color
    paddingBottom: '8px', // Optional padding to separate the border from content
    paddingRight: '15px',
  };

  const [userFullName, setUserFullName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  const iconButtonStyle = {
    borderRadius: '50%', // Make the border round
    transition: 'border-radius 0.2s ease', // Add a smooth transition effect
  };

  const rotateStyle = {
    transform: 'rotate(45deg)', // Apply the rotate transformation
  };

  const activeButtonStyle = {
    textDecoration: 'underline', // Add underline style
  };

  const { colorMode } = useColorMode();
  const navbarBgColor = colorMode === 'dark' ? 'gray.900' : 'transparent';

  const navigate = useNavigate();

  useEffect(() => {
    const userFullName = localStorage.getItem('fullName');
    setUserFullName(userFullName || '');
    setLoading(false);
  }, []);

  useEffect(() => {
    const storedUserEmail = localStorage.getItem('userEmail');
    setUserEmail(storedUserEmail || '');
    setLoading(false);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setUserFullName(''); // Clear the user full name in the component state
    navigate('/login');
  };

  useEffect(() => {
    const userFullName = localStorage.getItem('fullName');
    if (userFullName) {
      const [firstName, lastName] = userFullName.split(' ');
      setUserFullName(
        `${firstName.charAt(0).toUpperCase()}${firstName.slice(1)} ${lastName
          .charAt(0)
          .toUpperCase()}${lastName.slice(1)}`,
      );
    }
    setLoading(false);
  }, []);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mb={2}
      style={{ ...navbarStyle, backgroundColor: navbarBgColor }}
    >
      <Flex alignItems="center">
        <Link to="/">
          <Text
            fontSize="lg"
            fontWeight="bold"
            mr={4}
            paddingLeft="20px"
            paddingRight="20px"
          >
            CampusAgile
          </Text>
        </Link>

        <Link to="/home">
          <Button
            colorScheme="blue"
            variant="link"
            fontSize="lg"
            fontWeight="bold"
            mr={4}
            isActive={
              location.pathname === '/home' || location.pathname === '/'
            }
            style={
              location.pathname === '/home' || location.pathname === '/'
                ? activeButtonStyle
                : {}
            }
          >
            Home
          </Button>
        </Link>
        <Link to="/Notification">
          <Button
            colorScheme="blue"
            variant="link"
            fontSize="lg"
            fontWeight="bold"
            mr={4}
            isActive={location.pathname === '/Notification'} // Check if the location matches
            style={
              location.pathname === '/Notification' ? activeButtonStyle : {}
            }
          >
            Notifications
          </Button>
        </Link>
      </Flex>

      <Flex alignItems="center">
        {/* Notification Icon Dropdown */}
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<BellIcon />}
            colorScheme="blue"
            aria-label="Notifications"
            variant="ghost" // Remove background color and border
            size="sm" // Make the icon smaller
            fontSize="1.2rem"
            mr={2}
            style={{ ...iconButtonStyle, ...rotateStyle }} // Apply the custom styles here
            _hover={{
              bg: navbarBgColor,
              borderRadius: '50%', // Make it round on hover
            }}
          />
          <MenuList width="200px" height="300px">
            <div
              style={{
                fontSize: '1.2rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: '50%',
                height: '100%',
              }}
            >
              <p>No Notification!</p>
            </div>
          </MenuList>
        </Menu>

        {/* Question Icon Dropdown */}
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<QuestionOutlineIcon />}
            colorScheme="blue"
            aria-label="Question Mark"
            variant="ghost"
            size="sm"
            fontSize="1.2rem"
            mr={2}
            style={iconButtonStyle}
            _hover={{
              bg: navbarBgColor,
              borderRadius: '50%',
            }}
          />
          <MenuList width="500px" height="600px">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              height="100%"
            >
              {/* Your other content in the MenuList */}
              <Input
                placeholder="Search..."
                size="sm"
                p={2}
                border="1px solid #e2e8f0"
                borderBottom="none"
                borderRadius="2px"
              />
            </Box>
          </MenuList>
        </Menu>

        <IconButton
          icon={<SettingsIcon />}
          colorScheme="blue"
          aria-label="Settings"
          variant="ghost" // Remove background color and border
          size="sm" // Make the icon smaller
          fontSize="1.2rem"
          mr={2}
          style={iconButtonStyle} // Apply the custom style here
          _hover={{
            bg: navbarBgColor,
            borderRadius: '50%',
          }}
        />

        <Menu>
          <MenuButton
            as={Avatar}
            name={userFullName || 'Loading...'}
            size="sm"
            fontSize="0.8rem"
            lineHeight="1"
            padding="10px"
            textAlign="center"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          />
          <MenuList width="300px" height="157px">
            {loading ? (
              <Text fontSize="lg" fontWeight="bold" textAlign="center">
                Loading...
              </Text>
            ) : (
              <>
                <Text fontSize="lg" fontWeight="bold" textAlign="center">
                  {userFullName}
                </Text>
                <Text fontSize="sm" fontWeight="bold" textAlign="center" color="gray.600">
                  {userEmail}
                </Text>
                <Divider my="2" />
                <MenuItem fontSize="lg">
                  <Link to="/accountsetting">View Account Details</Link>
                </MenuItem>
                <MenuItem fontSize="lg" onClick={handleLogout}>
                  <Link to="./logout">Logout</Link>
                </MenuItem>
              </>
            )}
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
export default HomeNavbar;
