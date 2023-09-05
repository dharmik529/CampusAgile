import React, { useState } from 'react';
import { Box, Button, VStack, Text, useColorModeValue } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTasks,
  faCog,
  faListAlt,
  faFilter,
  faFileAlt,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import ProjectSetting from './ProjectSetting';

function SideBar() {
  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '4px',
    marginBottom: '8px',
    width: '100%',
    transition: 'background-color 0.3s',
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const hrStyle = {
    width: '115%',
    border: 'none',
    borderTop: '1px solid #000',
    margin: '15px 0',
    opacity: '20%',
    
    };

  const sidebarBgColor = useColorModeValue('gray.200', 'gray.700');

  const [isProjectSettingOpen, setIsProjectSettingOpen] = useState(false);
  const [isIssuesHovered, setIsIssuesHovered] = useState(false);
  const [isFiltersHovered, setIsFiltersHovered] = useState(false);
  const [isPagesHovered, setIsPagesHovered] = useState(false);
  const [isCodeHovered, setIsCodeHovered] = useState(false);

  const openProjectSetting = () => {
    setIsProjectSettingOpen(true);
  };

  const closeProjectSetting = () => {
    setIsProjectSettingOpen(false);
  };

  return (
    <Box
      w="300px"
      h="100%"
      bg={sidebarBgColor}
      position="fixed"
      left="0"
      top="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      paddingLeft="62px"
      paddingTop="50px"
    >
      <VStack spacing="4" align="center" p="4">
        <Text fontWeight="bold" paddingBottom="20px">
          Project Title
        </Text>

        <Button
          style={{
            ...buttonStyle,
            cursor: isIssuesHovered ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
          
        >
          <FontAwesomeIcon icon={faTasks} style={iconStyle} />
          Kanban Board
        </Button>

        
        <Button
          style={{
            ...buttonStyle,
            cursor: isIssuesHovered ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
          onClick={openProjectSetting}
        >
          <FontAwesomeIcon icon={faCog} style={iconStyle} />
          Project Settings
        </Button>

        {/* Horizontal line */}
        <hr style={hrStyle} />

        {/* "Issues" button */}
        <Button
          style={{
            ...buttonStyle,
            cursor: isIssuesHovered ? 'not-allowed' : 'pointer',
            width: '100%', // Set a fixed width for the button
          }}
          onMouseEnter={() => setIsIssuesHovered(true)}
          onMouseLeave={() => setIsIssuesHovered(false)}
        >
          <FontAwesomeIcon icon={faListAlt} style={iconStyle} />
          {isIssuesHovered ? 'Not Implemented' : 'Issues'}
        </Button>

        {/* "Filters" button */}
        <Button
          style={{
            ...buttonStyle,
            cursor: isFiltersHovered ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
          onMouseEnter={() => setIsFiltersHovered(true)}
          onMouseLeave={() => setIsFiltersHovered(false)}
          
        >
          <FontAwesomeIcon icon={faFilter} style={iconStyle} />
          {isFiltersHovered ? 'Not Implemented' : 'Filters'}
        </Button>

        {/* "Pages" button */}
        <Button
          style={{
            ...buttonStyle,
            cursor: isPagesHovered ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
          onMouseEnter={() => setIsPagesHovered(true)}
          onMouseLeave={() => setIsPagesHovered(false)}
        >
          <FontAwesomeIcon icon={faFileAlt} style={iconStyle} />
          {isPagesHovered ? 'Not Implemented' : 'Pages'}
        </Button>

        {/* "Code" button */}
        <Button
          style={{
            ...buttonStyle,
            cursor: isCodeHovered ? 'not-allowed' : 'pointer',
            width: '100%',
          }}
          onMouseEnter={() => setIsCodeHovered(true)}
          onMouseLeave={() => setIsCodeHovered(false)}
        >
          <FontAwesomeIcon icon={faCode} style={iconStyle} />
          {isCodeHovered ? 'Not Implemented' : 'Code'}
        </Button>
      </VStack>

      {isProjectSettingOpen && <ProjectSetting onClose={closeProjectSetting} />}
    </Box>
  );
}

export default SideBar;
