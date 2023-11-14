/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  FormControl,
  FormLabel,
  Textarea,
  ModalBody,
  Select,
  ModalCloseButton,
  Input,
  Button,
} from '@chakra-ui/react';
import useColumnTasks from '../hooks/useColumnTasks';
import { ColumnType } from '../utils/enums';
import Task from './Task';

function CreateIssue({ isOpen, onClose, column, onCreateTask }) {
  const { addEmptyTask } = useColumnTasks(column); 

  const [issueTitle, setIssueTitle] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [assignee, setAssignee] = useState('');
  const [status, setStatus] = useState('TODO');
  const [priority, setPriority] = useState('low');
  const [issueType, setIssueType] = useState('bug');

  const handleCreateTask = () => {
    onCreateTask({
      title: issueTitle,
      description: issueDescription,
      assignedTo,
      assignee,
      status,
      priority,
      issueType,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Issue</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY="auto">
          <Input
            placeholder="Issue Title"
            mb={4}
            value={issueTitle}
            onChange={(e) => setIssueTitle(e.target.value)}
          />

          <FormControl mb={4}>
            <FormLabel htmlFor="description">Issue Description</FormLabel>
            <Textarea
              id="description"
              rows={8}
              placeholder="Issue Description"
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="assignedTo">Assigned To</FormLabel>
            <Input
              id="assignedTo"
              placeholder="Assign this issue to"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="assignee">Assignee</FormLabel>
            <Input
              id="assignee"
              placeholder="Assigned by"
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            />
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="Status">Status</FormLabel>
            <Select
              id="Status"
              placeholder="Select Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Todo">TODO</option>
              <option value="In Progress">IN PROGRESS</option>
              <option value="Blocked">BLOCKED</option>
              <option value="Completed">COMPLETED</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="priority">Priority</FormLabel>
            <Select
              id="priority"
              placeholder="Select priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Select>
          </FormControl>

          <FormControl mb={4}>
            <FormLabel htmlFor="issueType">Issue Type</FormLabel>
            <Select
              id="issueType"
              placeholder="Select issue type"
              value={issueType}
              onChange={(e) => setIssueType(e.target.value)}
            >
              <option value="bug">Bug</option>
              <option value="error">Error</option>
              <option value="general">General</option>
              {/* Add more options as needed */}
            </Select>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose} marginRight="1%">
            Close
          </Button>
          <Button colorScheme="blue" onClick={handleCreateTask}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CreateIssue;
