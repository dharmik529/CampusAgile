import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text, Link as ChakraLink, Center } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';

const NotFound = () => (
  <Link to="/Home">
    <Box position="fixed" top="0" left="0" width="100vw" height="100vh" zIndex="1">
      <Spline
        scene="https://prod.spline.design/Mjr8XzZNDMwqnMuN/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  </Link>
);

export default NotFound;
