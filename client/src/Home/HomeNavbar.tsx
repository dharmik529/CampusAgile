import React from 'react';
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
} from '@chakra-ui/react';
import {
  SettingsIcon,
  QuestionOutlineIcon,
  BellIcon,
} from '@chakra-ui/icons'; // Import icons from Chakra UI
import { size } from 'lodash';

function HomeNavbar() {
  const navbarStyle = {
    borderBottom: '1px solid #e2e8f0', // Add a bottom border with the desired color
    paddingBottom: '8px', // Optional padding to separate the border from content
    paddingRight: '15px',
  };

  const iconButtonStyle = {
    borderRadius: '50%', // Make the border round
    transition: 'border-radius 0.2s ease', // Add a smooth transition effect
  };

  const rotateStyle = {
    transform: 'rotate(45deg)', // Apply the rotate transformation
  };

  return (
    <Flex justifyContent="space-between" alignItems="center" mb={2} style={navbarStyle}>
      <Flex alignItems="center">
        <Text fontSize="lg" fontWeight="bold" mr={4} paddingLeft='20px' paddingRight='20px'>
          CampusAgile
        </Text>
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="lg"
          fontWeight="bold"
          mr={4}
        >
          Home
        </Button>
        <Button
          colorScheme="blue"
          variant="link"
          fontSize="lg"
          fontWeight="bold"
          mr={4}
        >
          Notifications
        </Button>
      </Flex>

      <Flex alignItems="center">


        {/* Notification Icon Dropdown */}
        <Menu
        >
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
                bg: '#ADD8E6',
                borderRadius: '50%', // Make it round on hover
                
            }}
          />
          <MenuList
            width='200px'
            height='300px'
          >
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
              bg: '#ADD8E6',
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
            bg: '#ADD8E6',
            borderRadius: '50%', // Make it round on hover
          }}
        />

  <Menu>
    <MenuButton
      as={Avatar}
      name="Deep Patel"
      src="user-profile-image-url.jpg"
      size="sm"
      fontSize="0.8rem"
      lineHeight="1"
      padding='10px'
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
    />
    <MenuList width='300px' height='135px'>
      <Text fontSize="lg" fontWeight="bold" textAlign="center">
        DEEP PATEL
      </Text>
      <Divider my="2" /> {/* Add a line between items */}
      <MenuItem fontSize="lg">Account Settings</MenuItem> {/* Increase the font size */}
      <MenuItem>Logout</MenuItem>
    </MenuList>
  </Menu>


      </Flex>
    </Flex>
  );
}

export default HomeNavbar;
