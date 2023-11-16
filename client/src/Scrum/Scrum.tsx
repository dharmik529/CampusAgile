/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Textarea,
  Text,
  Flex,
  SlideFade,
  IconButton,
  HStack,
  Heading,
  Skeleton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import NavbarLeft from './ScrumNavbarLeft';

function Scrum() {
  const [note, setNote] = useState('');
  const [noteHistory, setNoteHistory] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const addNotification = (text, type) => {
    const notification = {
      id: Date.now(),
      text: text,
      type: type,
    };
    setNotifications([...notifications, notification]);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      const newNote = {
        note: note,
        date: new Date().toLocaleString(),
        author: 'Scrum Manager',
      };

      const updatedNotes = [newNote, ...noteHistory];
      setNoteHistory(updatedNotes);
      setNote('');

      localStorage.setItem('scrumNotes', JSON.stringify(updatedNotes));

      setEditingIndex(null);

      addNotification('A new note was added!', 'note');
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    }
  };

  const handleEditNote = (index) => {
    setEditingIndex(index);
    setNoteHistory((prevNotes) => {
      setNote(prevNotes[index].note);
      return prevNotes;
    });
  };

  const handleSaveNote = () => {
    if (editingIndex !== null) {
      const updatedNotes = [...noteHistory];
      updatedNotes[editingIndex] = {
        ...updatedNotes[editingIndex],
        note: note,
      };

      setNoteHistory(updatedNotes);
      setNote('');

      localStorage.setItem('scrumNotes', JSON.stringify(updatedNotes));

      setEditingIndex(null);

      addNotification('A note was edited!', 'note');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...noteHistory];
    updatedNotes.splice(index, 1);
    setNoteHistory(updatedNotes);

    localStorage.setItem('scrumNotes', JSON.stringify(updatedNotes));

    addNotification('A note was deleted!', 'note');
  };

  const { colorMode } = useColorMode();

  useEffect(() => {
    const storedNotes = localStorage.getItem('scrumNotes');
    if (storedNotes) {
      setNoteHistory(JSON.parse(storedNotes));
    }
    setIsLoading(false);
  }, []);

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      marginLeft={{ base: 0, md: '17%' }}
      bgColor={useColorModeValue('white', 'gray.800')}
    >
      <NavbarLeft />
      <Flex
        direction="column"
        align="center"
        width="100%"
      >
        <Box
          maxW="80%"
          width="100%"
          marginTop={{ base: '10vh', md: '-25%' }}
          maxH="90vh"
          overflowY="auto"
          position="fixed"
          alignContent="center"
          bgColor={useColorModeValue('gray.50', 'gray.900')}
          p={6}
          borderRadius="lg"
          boxShadow="md"
        >
          <Heading as="h1" size="lg" textAlign="center" mb={4}>
            Notes by Scrum Manager
          </Heading>
          {isLoading ? (
            <Skeleton height="200px" mb={4} />
          ) : (
            <>
              <Textarea
                placeholder="Add a new note..."
                height="200px"
                value={note}
                onChange={handleNoteChange}
                mb={4}
                fontSize="lg"
              />
              <Button
                colorScheme="blue"
                onClick={editingIndex !== null ? handleSaveNote : handleAddNote}
                mb={4}
                fontSize="lg"
                transition="background-color 0.3s"
                _hover={{ bg: 'blue.500' }}
              >
                {editingIndex !== null ? 'Save Note' : 'Add Note'}
              </Button>
            </>
          )}
          {isLoading ? (
            <Skeleton height="45px" width="120px" />
          ) : (
            noteHistory.map((noteItem, index) => (
              <SlideFade in key={index} offsetY="20px">
                <Box
                  bgColor={useColorModeValue('gray.50', 'gray.900')}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  mb={4}
                  boxShadow="md"
                  position="relative"
                  fontSize="lg"
                >
                  <HStack spacing={4} justify="space-between">
                    <IconButton
                      icon={<EditIcon />}
                      aria-label="Edit"
                      size="sm"
                      colorScheme="blue"
                      onClick={() => handleEditNote(index)}
                    />
                    <IconButton
                      icon={<DeleteIcon />}
                      aria-label="Delete"
                      size="sm"
                      colorScheme="red"
                      onClick={() => handleDeleteNote(index)}
                    />
                  </HStack>
                  <Text fontSize="md" fontWeight="bold" mb={2}>
                    {noteItem.author} - {noteItem.date}:
                  </Text>
                  {editingIndex === index ? (
                    <Textarea
                      value={note}
                      onChange={handleNoteChange}
                      autoFocus
                      onBlur={handleSaveNote}
                    />
                  ) : (
                    <Text fontSize="md" color={colorMode === 'dark' ? 'white' : 'gray.600'}>
                      {noteItem.note.split('\n').map((line, idx) => (
                        <span key={idx}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </Text>
                  )}
                </Box>
              </SlideFade>
            ))
          )}
        </Box>
      </Flex>
    </Flex>
  );
}

export default Scrum;
