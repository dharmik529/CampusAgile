import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
  import { Project } from '../../project/entities/project.entity';
  import { IssueKanban } from '../../kanban/entities/issue_kanban.entity';
  import { IssueStatus, User } from '../../issue/entities/issue.entity';
  
  @Entity('kanban')
  export class Kanban {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToOne(type => Project, project => project.kanban)
    @JoinColumn({ name: "project_id" })
    project: Project;
    
    @OneToMany(() => IssueKanban, (issueKanban) => issueKanban.kanban) // Update this line
    issueKanbans: IssueKanban[]; // Update this line
  
    @Column({ nullable: true, insert: false, update: false })
    issueTitle: string;
  
    @Column({ type: 'enum', enum: 'IssueStatus', nullable: true, insert: false, update: false })
    issueStatus: IssueStatus;
  
    @ManyToOne(type => User, { nullable: false, eager: true})
    @JoinColumn({ name: 'assignee_id' })
    assignedTo: User;
  
    @ManyToOne(type => User, { nullable: false, eager: true})
    @JoinColumn({ name: 'reporter_id' })
    assignedBy: User;
}
  