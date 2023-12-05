/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { SearchIcon, AddIcon, QuestionOutlineIcon } from '@chakra-ui/icons';

function NavbarTrigger({ onHover }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="50px"
      height="100vh"
      bgColor="blue.500"
      zIndex={999}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: isHovered ? '280px' : '50px',
        transition: 'width 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* Search icon at the top */}
      <Flex m="10px" alignItems="center">
        <Icon as={SearchIcon} color="white" fontSize="24px" cursor="pointer" />
      </Flex>

      <Flex>
        <Icon as={AddIcon} color="white" fontSize="24px" cursor="pointer" />
      </Flex>


      {/* Question icon at the bottom */}
      <Flex m="10px" alignItems="center">
        <Icon as={QuestionOutlineIcon} color="white" fontSize="24px" cursor="pointer" />
      </Flex>
    </Box>
  );
}

export default NavbarTrigger;
