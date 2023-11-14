import React, { useState, useEffect } from 'react';
import { Container, SimpleGrid, Box, Skeleton } from '@chakra-ui/react';
import Column from './Column';
import { ColumnType } from '../utils/enums';

const Kanban = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container maxW="container.lg" px={4} py={10}>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
            <Column column={ColumnType.TO_DO} />
            <Column column={ColumnType.IN_PROGRESS} />
            <Column column={ColumnType.BLOCKED} />
            <Column column={ColumnType.COMPLETED} />
          </SimpleGrid>
        </div>
      )}
    </Container>
  );
};

const LoadingSkeleton = () => (
  <Box height="100%" display="flex" flex="1" flexDirection="column" overflowY="hidden">
    <div style={{ maxWidth: 'container.lg', padding: '10px' }}>
      <Container maxW="container.lg" px={4} py={10}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
          {Array.from({ length: 4 }).map((_, index) => (
            <Box key={index}>
              <Skeleton height="80px" mb="4px" />
              <Skeleton height="500px" mb="20px" />
            </Box>
        ))}
      </SimpleGrid>
    </Container>
  </div>
</Box>
);

export default Kanban;
