import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon, ArrowBackIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useColorMode } from '@chakra-ui/react'; // Import useColorMode

function Scrum() {
  const [note, setNote] = useState('');
  const [noteHistory, setNoteHistory] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

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

      setNoteHistory([newNote, ...noteHistory]);
      setNote('');

      // Reset the editing index after adding a new note
      setEditingIndex(null);

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

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      justify="center"
      minH="100vh"
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'} // Use colorMode for background
    >
      
      <Box maxW="800px" width="100%" bg={colorMode === 'dark' ? 'gray.700' : 'white'} p={6} borderRadius="lg" boxShadow="md">
        <Heading as="h1" size="lg" textAlign="center" mb={4}>
          Scrum Notes
        </Heading>
        <Textarea
          placeholder="Add a new note..."
          value={note}
          onChange={handleNoteChange}
          mb={4}
          fontSize="lg"
        />
        <Button
          colorScheme="blue"
          onClick={editingIndex !== null ? handleSaveNote : handleAddNote}
          mb={4}
          isFullWidth
          fontSize="lg"
          transition="background-color 0.3s"
          _hover={{ bg: 'blue.500' }}
        >
          {editingIndex !== null ? 'Save Note' : 'Add Note'}
        </Button>
        {noteHistory.map((note, index) => (
          <SlideFade in key={index} offsetY="20px">
            <Box
              bg={colorMode === 'dark' ? 'gray.600' : 'white'} // Use colorMode for note background
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
                  value={note}
                  onChange={handleNoteChange}
                  autoFocus
                  onBlur={handleSaveNote}
                />
              ) : (
                <Text fontSize="md" color={colorMode === 'dark' ? 'white' : 'gray.600'}> 
                  {note.note}
                </Text>
              )}
            </Box>
          </SlideFade>
        ))}
      </Box>
      <IconButton
          as={Link}
          to="/"
          bottom="20px"
          right="20px"
          icon={<ArrowBackIcon />}
          zIndex="999"
          aria-label="Home"
          size="md"
          colorScheme="teal"
          mt={4}
          position="fixed"
        />
    </Flex>
  );
}

export default Scrum;
