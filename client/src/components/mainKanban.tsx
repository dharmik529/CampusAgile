import React from 'react';
import { ChakraProvider, Container, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './Column';
import DarkModeIconButton from './DarkModeIconButton';
import NavbarTop from './NavbarTop';
import NavbarLeft from './NavbarLeft';
import SideBar from './SideBar';
import { ColumnType } from './utils/enums';
import Search from './Search';

function mainKanban() {
  return (
    <ChakraProvider>
      <DndProvider backend={HTML5Backend}>
            <main
              style={{
                overflowY: 'auto',
                flex: 1,
                padding: '20px',
                marginLeft: '300px', // Add margin-left to account for sidebar width
              }}
            >
              <DarkModeIconButton position="absolute" top={14} right={6} />

              {/* Path */}
              <div style={{ paddingLeft: '25px', paddingTop: '10px', paddingBottom: '10px', opacity: '60%' }}>
                Projects / Name / Kanban Board
              </div>

              <h1
                style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  paddingLeft: '25px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  backgroundImage: 'linear-gradient(to right, #7928CA, #FF0080)',
                  WebkitBackgroundClip: 'text',
                  color: 'black',
                  marginTop: '4px',
                  marginBottom: '20px',
                  opacity: '70%',
                }}
              >
                Kanban Board
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '25px', paddingTop: '10px' }}>
                <Search size="sm" ml={0} />
              </div>

              <div style={{ maxWidth: 'container.lg', padding: '10px' }}>
                <Container maxW="container.lg" px={4} py={10}>
                  <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
                    <Column column={ColumnType.TO_DO} />
                    <Column column={ColumnType.IN_PROGRESS} />
                    <Column column={ColumnType.BLOCKED} />
                    <Column column={ColumnType.COMPLETED} />
                  </SimpleGrid>
                </Container>
              </div>
            </main>
      </DndProvider>
    </ChakraProvider>
  );
}

export default mainKanban;
