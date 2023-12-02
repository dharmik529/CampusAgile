import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Issue } from '../../issue/entities/issue.entity';
import { Kanban } from '../../kanban/entities/kanban.entity';

@Entity('issue_kanban')
export class IssueKanban {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Issue, (issue) => issue.issueKanbans)
  @JoinColumn({ name: 'issue_id' })
  issue: Issue;

  @ManyToOne(() => Kanban, (kanban) => kanban.issueKanbans)
  @JoinColumn({ name: 'kanban_id' })
  kanban: Kanban;
}
