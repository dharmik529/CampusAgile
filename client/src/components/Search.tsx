import React, { useState } from 'react';
import { Flex, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = () => {
    if (searchText) {
      const textToSearch = searchText.toLowerCase();
      const allText = document.body.innerText.toLowerCase();
      const searchOccurrences = [];

      let index = -1;
      while ((index = allText.indexOf(textToSearch, index + 1)) !== -1) {
        searchOccurrences.push(index);
      }

      setSearchResult(searchOccurrences);
    } else {
      setSearchResult([]);
    }
  };

  const highlightText = (text) => {
    const parts = [];
    let lastIndex = 0;

    searchResult.forEach((index) => {
      parts.push(text.substring(lastIndex, index));
      parts.push(
        <mark key={index} style={{ backgroundColor: 'yellow' }}>
          {text.substr(index, searchText.length)}
        </mark>
      );
      lastIndex = index + searchText.length;
    });

    parts.push(text.substring(lastIndex));

    return parts;
  };

  return (
    <Flex
      align="center"
      borderRadius="md"
      boxShadow="sm"
      _hover={{ boxShadow: 'md' }}
      bg="transparent"
    >
      <InputGroup size="sm">
        <InputRightElement
          pointerEvents="none"
          // eslint-disable-next-line react/no-children-prop
          children={<SearchIcon color="gray.400" />}
        />
        <Input
          placeholder="Search..."
          size="sm"
          background="transparent"
          border="1px solid #D3D3D3"
          borderRadius="5px"
          _focus={{ borderColor: 'gray.400' }}
          borderColor="gray.500"
          _placeholder={{ color: 'gray.400' }}
          px={3}
          pl={3}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </InputGroup>
      <button onClick={handleSearch} style={{ display: 'none' }}></button>
      <div>
        {searchResult.length > 0 && (
          <div>
            <p>Search Results:</p>
            <div style={{ backgroundColor: 'white' }}>{highlightText(document.body.innerText)}</div>
          </div>
        )}
      </div>
    </Flex>
  );
};

export default Search;
