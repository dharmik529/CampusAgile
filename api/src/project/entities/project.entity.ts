import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { User } from '../../user/entities/user.entity';

export enum ProjectStatus {
  Open = 'Active',
  InProgress = 'In Progress',
  Done = 'Completed',
  OnHold = 'On Hold'
}

export enum ProjectPriority {
  Lowest = 'Lowest',
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
  Highest = 'Highest'
}

@Entity('project')
export class Project {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: ProjectStatus, default: ProjectStatus.Open })
  status: ProjectStatus;

  @Column({ type: 'enum', enum: ProjectPriority, default: ProjectPriority.Medium })
  priority: ProjectPriority;

  @ManyToOne(type => User)
  @JoinColumn({ name: "created_by_user" })
  createdByUser: User;
}
