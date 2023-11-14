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
import { Link } from 'react-router-dom';
import NavbarLeft from './ScrumNavbarLeft';
import Notification from '../Home/Notification'; // Import the Notification component

function Scrum() {
  const [note, setNote] = useState('');
  const [noteHistory, setNoteHistory] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [showNotification, setShowNotification] = useState(false); // State to control notification visibility

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleAddNote = () => {
    if (note.trim() !== '') {
      const newNote = {
        note: note,
        date: new Date().toLocaleString(),
        author: 'Scrum Manager',
      };
  
      // Update the note history
      setNoteHistory([newNote, ...noteHistory]);
      setNote('');
  
      // Reset the editing index after adding a new note
      setEditingIndex(null);
  
      // Notify the user about the new scrum note
      const notification = {
        id: Date.now(),
        text: 'A new scrum note was added!',
        type: 'scrum', // Specify the type as 'scrum'
      };
  
      // Store the notification in localStorage
      localStorage.setItem('scrumNotification', JSON.stringify(notification));
  
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
      }, 100);
    }
  };
  

  const handleEditNote = (index) => {
    // Set the editing index to the clicked note
    setEditingIndex(index);

    // Set the note text to the selected note for editing
    setNote(noteHistory[index].note);
  };

  const handleSaveNote = () => {
    if (editingIndex !== null) {
      // Update the note at the specified index
      const updatedNotes = [...noteHistory];
      updatedNotes[editingIndex] = {
        ...updatedNotes[editingIndex],
        note: note,
      };

      setNoteHistory(updatedNotes);
      setNote('');
      setEditingIndex(null);
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...noteHistory];
    updatedNotes.splice(index, 1);
    setNoteHistory(updatedNotes);
  };

  const { colorMode } = useColorMode(); // Get the current color mode

  // Simulate loading for 2 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      marginLeft={{ base: 0, md: '17%' }} // Adjust the left margin for different screen sizes
      bgColor={useColorModeValue('white', 'gray.800')}
    >
      <NavbarLeft />
      <Flex
        direction="column"
        align="center"
        width="100%" // Ensure full width
      >
        <Box
          maxW="80%"
          width="100%"
          marginTop={{ base: '10vh', md: '-25%' }} // Adjusted marginTop for responsiveness
          maxH="90vh" // Adjusted maxH to ensure a maximum height of 90% of the viewport height
          overflowY="auto" // Add vertical scroll if needed
          position="fixed"
          alignContent="center"
          bgColor={useColorModeValue('gray.50', 'gray.900')}
          p={6}
          borderRadius="lg"
          boxShadow="md"
        >
          <Heading as="h1" size="lg" textAlign="center" mb={4}>
            Notes by Scrum Master
          </Heading>
          {isLoading ? ( // Display skeleton loading screen while loading
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
            noteHistory.map((note, index) => (
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
                    {note.author} - {note.date}:
                  </Text>
                  {editingIndex === index ? (
                    <Textarea
                      value={note.note}
                      onChange={handleNoteChange}
                      autoFocus
                      onBlur={handleSaveNote}
                    />
                  ) : (
                    <Text fontSize="md" color={colorMode === 'dark' ? 'white' : 'gray.600'}>
                      {note.note.split('\n').map((line, index) => (
                        <span key={index}>
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
