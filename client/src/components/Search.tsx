import React from 'react';
import { Flex, Input, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = () => {
  return (
    <Flex
      align="center"
      borderRadius="md"
      boxShadow="sm"
      _hover={{ boxShadow: 'md' }}
      bg="transparent"
    >
      <InputGroup size="sm">
        <Input
          placeholder="Search..."
          size="sm"
          background="transparent"
          border="1px solid #D3D3D3"
          borderRadius="5px"
          _focus={{ borderColor: 'gray.300' }}
          _placeholder={{ color: 'gray.400' }}
          px={3}
        />
        <InputRightElement>
          <IconButton
            icon={<SearchIcon />}
            aria-label="Search"
            size="sm"
            bg="purple.500"
            color="white"
            borderRadius="md"
            _hover={{ bg: 'purple.600' }}
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Search;
