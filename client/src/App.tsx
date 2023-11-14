import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import NavbarLeft from './components/NavbarLeft';
import SideBar from './components/SideBar';
import Search from './components/Search';
import Code from './components/code';
import FileUpload from './components/FileUpload';
import Kanban from './components/Kanban';
import ProjectSetting from './components/ProjectSetting';

function App() {
  const [page, setPage] = useState('kanban');
  const [projectName, setProjectName] = useState('Project Name'); // Initialize project name state
  const [isProjectSettingOpen, setIsProjectSettingOpen] = useState(false);

  const togglePage = (newPage) => {
    if (page !== newPage) {
      setPage(newPage);
    }
  };

  const handleProjectNameChange = (newName) => {
    setProjectName(newName);
  };

  const openProjectSetting = () => {
    setIsProjectSettingOpen(true);
  };

  const closeProjectSetting = () => {
    setIsProjectSettingOpen(false);
  };

  return (
    <ChakraProvider>
      <ProjectSetting
        isOpen={isProjectSettingOpen}
        onClose={closeProjectSetting}
        onSaveProjectName={handleProjectNameChange}
        projectName={projectName}
      />
      <DndProvider backend={HTML5Backend}>
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
          <NavbarLeft />
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'hidden',
            }}
          >
            <SideBar
              onSwitchToCode={() => togglePage('code')}
              onSwitchToFiles={() => togglePage('files')}
              onSwitchToKanban={() => togglePage('kanban')}
            />
            <main
              style={{
                overflowY: 'auto',
                flex: 1,
                padding: '20px',
                marginLeft: '300px',
              }}
            >
              <div>
                <div
                  style={{
                    paddingLeft: '25px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    opacity: '60%',
                  }}
                >
                  {projectName} /{' '}
                  {page === 'code'
                    ? 'Code'
                    : page === 'files'
                    ? 'Files'
                    : 'Kanban Board'}
                </div>
                <h1
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textAlign: 'left',
                    paddingLeft: '25px',
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    WebkitBackgroundClip: 'text',
                    marginTop: '4px',
                    marginBottom: '20px',
                  }}
                >
                  {page === 'code'
                    ? 'Code'
                    : page === 'files'
                    ? 'Files'
                    : 'Kanban Board'}
                </h1>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: '25px',
                    paddingTop: '10px',
                  }}
                >
                  <Search />
                </div>
                {page === 'code' ? (
                  <Code />
                ) : page === 'files' ? (
                  <FileUpload />
                ) : (
                  <Kanban />
                )}
              </div>
            </main>
          </div>
        </div>
      </DndProvider>
    </ChakraProvider>
  );
}

export default App;
