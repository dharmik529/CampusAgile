import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ColumnType } from '../utils/enums';
import { pickChakraRandomColor, swap } from '../utils/helpers';
import { debug } from '../utils/logging';
import { TaskModel } from '../utils/models';
import useTaskCollection from './useTaskCollection';

const MAX_TASK_PER_COLUMN = 100;

function useColumnTasks(column: ColumnType) {
  const [tasks, setTasks] = useTaskCollection();

  const columnTasks = tasks[column];

  const addEmptyTask = useCallback(
    (taskData) => {
      debug(`Adding new empty task to ${column} column`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];

        if (columnTasks.length > MAX_TASK_PER_COLUMN) {
          debug('Too many tasks!');
          return allTasks;
        }

        const newColumnTask = {
          id: uuidv4(),
          title: `New ${column} task`,
          color: pickChakraRandomColor('.300'),
          column,
          issueTitle: '',
          assignedTo: '',
          assignee: '',
          ...taskData, // Spread the taskData into the new task object
        };

        return {
          ...allTasks,
          [column]: [newColumnTask, ...columnTasks],
        };
      });
    },
    [column, setTasks]
  );

  const deleteTask = useCallback(
    (id: TaskModel['id']) => {
      debug(`Removing task ${id}..`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.filter((task) => task.id !== id),
        };
      });
    },
    [column, setTasks]
  );

  const updateTask = useCallback(
    (id: TaskModel['id'], updatedTask: Omit<Partial<TaskModel>, 'id'>) => {
      debug(`Updating task ${id} with ${JSON.stringify(updatedTask)}`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: columnTasks.map((task) =>
            task.id === id ? { ...task, ...updatedTask } : task
          ),
        };
      });
    },
    [column, setTasks]
  );

  const dropTaskFrom = useCallback(
    (
      from: ColumnType,
      id: TaskModel['id'],
      droppedTaskInfo: Partial<TaskModel> // Assuming droppedTaskInfo has partial TaskModel properties
    ) => {
      setTasks((allTasks) => {
        const fromColumnTasks = allTasks[from];
        const toColumnTasks = allTasks[column];
        const movingTask = fromColumnTasks.find((task) => task.id === id);
  
        if (!movingTask) {
          return allTasks;
        }
  
        const updatedTask = { ...movingTask, ...droppedTaskInfo, column };
  
        return {
          ...allTasks,
          [from]: fromColumnTasks.filter((task) => task.id !== id),
          [column]: [updatedTask, ...toColumnTasks],
        };
      });
    },
    [column, setTasks]
  );
  
  

  const swapTasks = useCallback(
    (i: number, j: number) => {
      debug(`Swapping task ${i} with ${j} in ${column} column`);
      setTasks((allTasks) => {
        const columnTasks = allTasks[column];
        return {
          ...allTasks,
          [column]: swap(columnTasks, i, j),
        };
      });
    },
    [column, setTasks]
  );

  return {
    tasks: columnTasks,
    addEmptyTask,
    updateTask,
    dropTaskFrom,
    deleteTask,
    swapTasks,
  };
}

export default useColumnTasks;
