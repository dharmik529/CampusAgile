import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { StarIcon } from '@chakra-ui/icons';


const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState('Feedback');
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitFeedback = () => {
    // You can implement the logic to send the feedback to your backend or perform any other action.
    console.log(`Feedback Type: ${feedbackType}`);
    console.log(`Feedback Text: ${feedbackText}`);
    console.log(`Rating: ${rating}`);
    setIsSubmitted(true);
  };

  return (
    <Box p={8} m="auto" maxW="600px">
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Submit Feedback
      </Text>
      {isSubmitted ? (
        <Box>
          <Text color="green.500" fontSize="xl" mb={4}>
            Thank you for your feedback! Your submission has been received.
          </Text>
        </Box>
      ) : (
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Feedback Type</FormLabel>
            <RadioGroup value={feedbackType} onChange={setFeedbackType}>
              <HStack spacing={4}>
                <Radio value="Feedback">Feedback</Radio>
                <Radio value="Bug">Bug</Radio>
                <Radio value="Suggestion">Suggestion</Radio>
                <Radio value="Issue">Issue</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Rating</FormLabel>
            <HStack>
              {Array(5)
                .fill('')
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    boxSize={6}
                    color={index < rating ? 'teal.500' : 'gray.300'}
                    onClick={() => setRating(index + 1)}
                    _hover={{ cursor: 'pointer' }}
                  />
                ))}
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel>Feedback Text</FormLabel>
            <Textarea
              placeholder="Enter your feedback, suggestion, or issue here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              rows={6}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            onClick={submitFeedback}
            leftIcon={<AddIcon />}
          >
            Submit Feedback
          </Button>
        </VStack>
      )}
    </Box>
  );
};

export default Feedback;
