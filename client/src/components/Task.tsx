import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, IconButton, ScaleFade } from '@chakra-ui/react';
import _ from 'lodash';
import React from 'react';
import { memo, useState } from 'react';
import { useTaskDragAndDrop } from '../hooks/useTaskDragAndDrop';
import { TaskModel } from '../utils/models';
import CreateIssue from './CreateIssue';

type TaskProps = {
  index: number;
  task: TaskModel;
  onUpdate: (id: TaskModel['id'], updatedTask: TaskModel) => void;
  onDelete: (id: TaskModel['id']) => void;
  onDropHover: (i: number, j: number) => void;
  issueTitle: string; // New prop for issue title
  assignedTo: string; // New prop for assignedTo
  assignee: string; // New prop for assignee
};

function Task({
  index,
  task,
  onUpdate: handleUpdate,
  onDropHover: handleDropHover,
  onDelete: handleDelete,
}: TaskProps) {
  const { ref, isDragging } = useTaskDragAndDrop<HTMLDivElement>(
    { task, index: index },
    handleDropHover,
  );

  const handleDeleteClick = () => {
    handleDelete(task.id);
  };

  const [isCreateIssueModalOpen, setIsCreateIssueModalOpen] = useState(false);
  const [issueInfo, setIssueInfo] = useState({
    issueTitle: '', // Initialize with default values
    assignedTo: '',
    assignee: '',
  });

  const openCreateIssueModal = () => {
    setIsCreateIssueModalOpen(true);
  };

  const closeCreateIssueModal = () => {
    setIsCreateIssueModalOpen(false);
  };

  const handleCreateTask = (taskId, updatedTask) => {
    handleUpdate(taskId, { ...task, ...updatedTask });
    setIssueInfo({
      issueTitle: updatedTask.title || '', // Set issueInfo with the updated values
      assignedTo: updatedTask.assignedTo || '',
      assignee: updatedTask.assignee || '',
    });
  };

  return (
    <ScaleFade in={true} unmountOnExit>
      <Box
        ref={ref}
        as="div"
        role="group"
        position="relative"
        rounded="lg"
        w={200}
        pl={3}
        pr={7}
        pt={3}
        pb={1}
        boxShadow="xl"
        cursor="grab"
        fontWeight="bold"
        userSelect="none"
        bgColor={task.color}
        opacity={isDragging ? 0.5 : 1}
        zIndex={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <div>
          <IconButton
            position="absolute"
            top={0}
            left={163.5}
            zIndex={100}
            aria-label="expand-task"
            size="md"
            colorScheme="solid"
            color={'gray.700'}
            icon={<EditIcon />}
            opacity={0}
            _groupHover={{
              opacity: 1,
            }}
            onClick={openCreateIssueModal}
          />
          <CreateIssue
            isOpen={isCreateIssueModalOpen}
            onClose={closeCreateIssueModal}
            onCreateTask={handleCreateTask}
            taskId={task.id}
          />

          <IconButton
            position="absolute"
            bottom={0}
            right={-0.4}
            zIndex={100}
            aria-label="delete-task"
            size="sm"
            colorScheme="solid"
            color={'gray.700'}
            icon={<DeleteIcon />}
            opacity={0}
            _groupHover={{
              opacity: 1,
            }}
            onClick={handleDeleteClick}
          />
          {/* Display updated data from issueInfo state */}
          <p>{`Issue Title: ${issueInfo.issueTitle}`}</p>
          <p>{`Assigned by: ${issueInfo.assignee}`}</p>
          <p>{`Assigned to: ${issueInfo.assignedTo}`}</p>
        </div>
      </Box>
    </ScaleFade>
  );
}

export default memo(Task, (prev, next) => {
  if (
    _.isEqual(prev.task, next.task) &&
    _.isEqual(prev.index, next.index) &&
    prev.onDelete === next.onDelete &&
    prev.onDropHover === next.onDropHover &&
    prev.onUpdate === next.onUpdate
  ) {
    return true;
  }

  return false;
});
