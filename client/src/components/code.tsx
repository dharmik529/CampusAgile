import React, { useState } from 'react';
import prettier from 'prettier/standalone';
import parserBabel from 'prettier/parser-babel';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  ChakraProvider,
  useColorModeValue,
} from '@chakra-ui/react';

const languages = [
  { label: 'JavaScript', value: 'javascript', extension: '.js' },
  { label: 'TypeScript', value: 'typescript', extension: '.ts' },
  { label: 'Python', value: 'python', extension: '.py' },
  { label: 'Java', value: 'java', extension: '.java' },
  { label: 'C#', value: 'csharp', extension: '.cs' },
  { label: 'Ruby', value: 'ruby', extension: '.rb' },
  { label: 'Go', value: 'go', extension: '.go' },
  { label: 'Swift', value: 'swift', extension: '.swift' },
  { label: 'PHP', value: 'php', extension: '.php' },
  { label: 'Dart', value: 'dart', extension: '.dart' },
  { label: 'Rust', value: 'rust', extension: '.rs' },
  { label: 'Kotlin', value: 'kotlin', extension: '.kt' },
  { label: 'Scala', value: 'scala', extension: '.scala' },
  { label: 'Perl', value: 'perl', extension: '.pl' },
  { label: 'Haskell', value: 'haskell', extension: '.hs' },
  { label: 'Lua', value: 'lua', extension: '.lua' },
  { label: 'Matlab', value: 'matlab', extension: '.mat' },
  { label: 'R', value: 'r', extension: '.r' },
  { label: 'CSS', value: 'css', extension: '.css' },
  { label: 'HTML', value: 'html', extension: '.html' },
];

const CodeEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [fileName, setFileName] = useState('Untitled.js');
  const [isCodePosted, setIsCodePosted] = useState(false);
  const [formattedCode, setFormattedCode] = useState('');
  const [userName, setUserName] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    setIsCodePosted(false);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);

    const selectedLanguageData = languages.find((lang) => lang.value === selectedLanguage);
    if (selectedLanguageData) {
      setFileName(`Untitled${selectedLanguageData.extension}`);
    }
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const formatCode = () => {
    try {
      const formatted = prettier.format(code, {
        parser: 'babel',
        plugins: [parserBabel],
      });
      setFormattedCode(formatted);
    } catch (error) {
      console.error('Code formatting error:', error);
      setFormattedCode(code);
    }
  };

  const copyCode = () => {
    const codeToCopy = formattedCode;
    const textArea = document.createElement('textarea');
    textArea.value = codeToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
  };

  const deleteCode = () => {
    setCode('');
    setLanguage('javascript');
    setFileName('Untitled.js');
    setIsCodePosted(false);
    setFormattedCode('');
    setUserName('');
  };  

  const postCode = () => {
    formatCode();
    setIsCodePosted(true);
  };

  const sidebarBgColor = useColorModeValue('gray.100', 'gray.900');

  return (
    <ChakraProvider>
      <Box style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{alignItems: 'center'}}>
          <Box
            maxW="container.lg"
            marginBottom="5%"
            alignItems="center"
            borderRadius="md"
            flex="1"
            padding="20px"
            marginLeft="5%"
            display="absolute"
            justifyContent="center"
          >
            <Container maxW="container.lg" mt="3" bgColor="white" borderRadius="md" boxShadow="md" p="4" marginTop="5%" marginBottom="5%" bg={sidebarBgColor}>
              <Heading as="h1" size="2xl" textAlign="center">
                Code Editor
              </Heading>
              <Stack spacing="4">
                <FormControl>
                  <FormLabel htmlFor="languageSelect">Select a programming language:</FormLabel>
                  <Select id="languageSelect" onChange={handleLanguageChange} value={language}>
                    {languages.map((lang) => (
                      <option key={lang.value} value={lang.value}>
                        {lang.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="fileName">Enter a file name:</FormLabel>
                  <Input
                    type="text"
                    id="fileName"
                    value={fileName}
                    onChange={handleFileNameChange}
                    placeholder="File name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="userName">Your Name:</FormLabel>
                  <Input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={handleUserNameChange}
                    placeholder="Your Name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="code">Paste your code here:</FormLabel>
                  <Textarea
                    id="code"
                    rows={10}
                    value={code}
                    onChange={handleCodeChange}
                    placeholder="Paste your code here..."
                  />
                </FormControl>
                <Stack direction={{ base: 'column', md: 'row' }} spacing="4">
                  <Button colorScheme="blue" onClick={formatCode}>
                    Format Code
                  </Button>
                  <Button colorScheme="blue" onClick={postCode}>
                    Post Code
                  </Button>
                </Stack>
              </Stack>
            </Container>

            {isCodePosted && (
              <Box mt="6">
                <Text paddingBottom="0.5%" paddingLeft="10px">
                  {fileName && `File Name: ${fileName}`} ︴Posted by: {userName}{' '}
                  <Button colorScheme="transparent" color="gray" onClick={deleteCode} ml="2" float="right" top={-2} >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  <Button colorScheme="transparent" color="gray" onClick={copyCode} ml="2" float="right" top={-2} right={-5}>
                    <FontAwesomeIcon icon={faCopy} />
                  </Button>
                </Text>
                <Box bg={sidebarBgColor} borderRadius="md" p="4">
                  <SyntaxHighlighter language={language} style={atomOneLight} bg={sidebarBgColor} borderRadius="md">
                    {formattedCode}
                  </SyntaxHighlighter>
                </Box>
              </Box>
            )}
          </Box>
        </div>
      </Box>
    </ChakraProvider>
  );
};

export default CodeEditor;