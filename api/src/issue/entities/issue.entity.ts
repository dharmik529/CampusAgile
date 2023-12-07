import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
// import { Kanban } from "../../kanban/entities/kanban.entity";

export enum IssueStatus {
  Open = 'ToDo',
  InProgress = 'In Progress',
  Done = 'Completed',
  Backlog = 'Backlog'
}

enum IssueType {
  Bug = 'Bug',
  Story = 'Story',
  Epic = 'Epic',
  Task = 'Task'
}

enum Priority {
  Lowest = 'Lowest',
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Highest = 'Highest'
}

@Entity('issue')
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: IssueStatus, default: IssueStatus.Open })
  status: IssueStatus;

  @Column({ type: 'enum', enum: IssueType, default: IssueType.Task })
  type: IssueType;

  @Column({ type: 'enum', enum: Priority, default: Priority.Medium })
  priority: Priority;

  @ManyToOne(type => User, user => user.issuesAssigned)
  @JoinColumn({ name: 'reporter_id' })
  reporter: User;

  @ManyToOne(type => User, user => user.issuesAssigned)
  @JoinColumn({ name: 'assignee_id' })
  assignee: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
export { User };

