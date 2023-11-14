import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  VStack,
  Input,
  Image,
  Flex,
  Spacer,
  HStack,
  StackDivider,
} from '@chakra-ui/react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [previews, setPreviews] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Update the state with the uploaded files
    setFiles([...files, ...acceptedFiles]);
    setDescriptions([...descriptions, '']); // Initialize descriptions for each file
    loadPreviews(acceptedFiles);
  };

  const loadPreviews = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviews((prevPreviews) => [...prevPreviews, e.target.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'application/pdf, image/*', // Define accepted file types (PDF and images in this example)
  });

  const renderUploadedFiles = () => {
    return files.map((file, index) => (
      <Box
        key={index}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="4"
        mb="4"
      >
        <HStack>
          <Image
            src={previews[index]}
            alt={file.name}
            boxSize="100px"
            objectFit="cover"
          />
          <VStack align="start" spacing={2} divider={<StackDivider borderColor="gray.200" />}>
            <Text fontWeight="bold">{file.name}</Text>
            <Text color="gray.500" fontSize="sm">
              Uploaded on: {formatDate(new Date())}
            </Text>
            <Input
              placeholder="Add a short description"
              value={descriptions[index]}
              onChange={(e) => updateDescription(index, e.target.value)}
            />
          </VStack>
          <Spacer />
          <a
            href={previews[index]} // Change to the appropriate download link
            download={file.name} // Set the download attribute to the file name
            style={{ textDecoration: 'none' }}
          >
            <Button colorScheme="blue" size="sm">
              Download
            </Button>
          </a>
        </HStack>
      </Box>
    ));
  };

  const updateDescription = (index, value) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index] = value;
    setDescriptions(updatedDescriptions);
  };

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <VStack spacing={4} align="center">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Box
          p="4"
          borderWidth={2}
          borderColor="gray.300"
          borderStyle="dashed"
          borderRadius="lg"
          textAlign="center"
          marginTop="10%"
        >
          <Text>Drag & drop files here or click to select files</Text>
        </Box>
      </div>

      {files.length > 0 && (
        <VStack spacing={2} align="center">
          <Text fontSize="lg">Uploaded Files:</Text>
          {renderUploadedFiles()}
        </VStack>
      )}
    </VStack>
  );
};

export default FileUpload;
