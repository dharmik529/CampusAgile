import React from 'react';
import { Spinner, Center, Box } from '@chakra-ui/react';

function Loading() {
  return (
    <Center minH="100vh">
      <Box>
        <Spinner size="xl" color="blue.500" />
        <p>Loading...</p>
      </Box>
    </Center>
  );
}

export default Loading;
