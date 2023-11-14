import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Issue } from '../../issue/entities/issue.entity';

enum Role {
  Admin = 'Admin',
  Project_Manager = 'Project Manager',
  Assignee = 'Assignee',
  Reporter = 'Reporter'
}

enum Category {
  Student = 'Student',
  Teacher = 'Teacher',
  Faculty = 'Faculty'
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  full_name: string;

  @Column({ type: 'varchar', length: 50 })
  username: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', enum: Role, default: Role.Assignee })
  role: Role;

  @Column({ type: 'enum', enum: Category, default: Category.Student })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  last_login: Date;

  @ManyToMany(type => Issue, issue => issue.assignee)
  issuesAssigned: Issue[];

  @ManyToMany(type => Issue, issue => issue.reporter)
  issuesReported: Issue[];
}
