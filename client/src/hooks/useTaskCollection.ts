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
        issueTitle: '',
        assignedTo: '',
        assignee: '',
      },
    ],
    [ColumnType.IN_PROGRESS]: [
      {
        id: uuidv4(),
        column: ColumnType.IN_PROGRESS,
        title: 'Task 2',
        color: 'yellow.300',
        issueTitle: '',
        assignedTo: '',
        assignee: '',
      },
    ],
    [ColumnType.BLOCKED]: [
      {
        id: uuidv4(),
        column: ColumnType.BLOCKED,
        title: 'Task 3',
        color: 'red.300',
        issueTitle: '',
        assignedTo: '',
        assignee: '',
      },
    ],
    [ColumnType.COMPLETED]: [
      {
        id: uuidv4(),
        column: ColumnType.COMPLETED,
        title: 'Task 4',
        color: 'green.300',
        issueTitle: '',
        assignedTo: '',
        assignee: '',
      },
    ],
  });
}

export default useTaskCollection;