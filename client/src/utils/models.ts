import { ColumnType } from './enums';

export interface TaskModel {
  issueTitle: string;
  assignedTo: string;
  assignee: string;
  id: string;
  title: string;
  column: ColumnType;
  color: string;
}

export interface DragItem {
  index: number;
  id: TaskModel['id'];
  from: ColumnType;
}
