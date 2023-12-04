import { AddIcon } from '@chakra-ui/icons';
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import useColumnDrop from '../hooks/useColumnDrop';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';
import CreateIssue from './CreateIssue';

const ColumnColorScheme: Record<ColumnType, string> = {
  'Todo': 'gray',
  'In Progress': 'blue',
  'Blocked': 'red',
  'Completed': 'green',
};

function Column({ project, column }: { project: string; column: ColumnType }) {
  const {
    tasks,
    addEmptyTask,
    deleteTask,
    dropTaskFrom,
    swapTasks,
    updateTask,
  } = useColumnTasks(column);

  const { dropRef, isOver } = useColumnDrop(column, dropTaskFrom);

  const ColumnTasks = tasks.map((task, index) => (
    <Task
      key={task.id}
      task={task}
      index={index}
      onDropHover={swapTasks}
      onUpdate={updateTask}
      onDelete={deleteTask}
      issueTitle=''
      assignedTo=''
      assignee=''
    />
  ));

  const createTask = (taskData) => {
    // Pass the selected status to the addEmptyTask function
    addEmptyTask({
      ...taskData,
      status: selectedStatus,
      project: project, // Include the project information
    });
  };


  const [isCreateIssueModalOpen, setIsCreateIssueModalOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Todo'); // Initialize with a default status

  const openCreateIssueModal = () => {
    setIsCreateIssueModalOpen(true);
  };

  const closeCreateIssueModal = () => {
    setIsCreateIssueModalOpen(false);
  };

  return (
    <Box>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge
          px={2}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton
        size="xs"
        w="full"
        color={useColorModeValue('gray.500', 'gray.400')}
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        _hover={{ bgColor: useColorModeValue('gray.200', 'gray.600') }}
        py={2}
        variant="solid"
        // onClick={addEmptyTask}
        colorScheme="black"
        aria-label="add-task"
        icon={<AddIcon />}
        onClick={openCreateIssueModal}
      />
      <CreateIssue isOpen={isCreateIssueModalOpen} onClose={closeCreateIssueModal} onCreateTask={createTask} column={undefined} />

      <Stack
        ref={dropRef}
        direction={{ base: 'row', md: 'column' }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue('gray.50', 'gray.900')}
        rounded="lg"
        boxShadow="md"
        overflow="auto"
        opacity={isOver ? 0.85 : 1}
      >
        {ColumnTasks}
      </Stack>
    </Box>
  );
}

export default Column;
