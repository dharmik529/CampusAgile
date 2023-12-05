import { useLocalStorage } from 'usehooks-ts';

import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { TaskModel } from '../utils/models';

function useTaskCollection() {
  return useLocalStorage<{
    [key in ColumnType]: TaskModel[];
  }>('tasks', {
    [ColumnType.TO_DO]: [
      {
        id: uuidv4(),
        column: ColumnType.TO_DO,
        title: 'Task 1',
        color: 'blue.300',
        issueTitle: 'Issue 1',
        assignedTo: 'User 1',
        assignee: 'User 2',
        // Other properties...
      },
    ],
    [ColumnType.IN_PROGRESS]: [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 2',
        color: 'yellow.300',
        issueTitle: 'Issue 2',
        assignedTo: 'User 3',
        assignee: 'User 4',
        // Other properties...
      },
    ],
    [ColumnType.BLOCKED]: [
      {
        id: uuidv4(),
        column: ColumnType.BLOCKED,
        title: 'Task 3',
        color: 'red.300',
        issueTitle: 'Issue 3',
        assignedTo: 'User 5',
        assignee: 'User 6',
        // Other properties...
      },
    ],
    [ColumnType.COMPLETED]: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: 'green.300',
        issueTitle: 'Issue 4',
        assignedTo: 'User 7',
        assignee: 'User 8',
        // Other properties...
      },
    ],
  });
}

export default useTaskCollection;