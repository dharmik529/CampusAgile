import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';
import { Issue } from './entities/issue.entity';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  async create(createIssueDto: CreateIssueDto): Promise<String> {
    const issue = new Issue();
    issue.title = createIssueDto.title;
    issue.description = createIssueDto.description;
    issue.status = createIssueDto.status;
    issue.type = createIssueDto.type;
    issue.priority = createIssueDto.priority;

    // Use the User entity for reporter and assignee
    issue.reporter = createIssueDto.reporter;
    issue.assignee = createIssueDto.assignee;

    await this.issueRepository.save(issue);
    return `Issue created successfully`;
  }


  async findAll(): Promise<Issue[]> {
    const issues = await this.issueRepository
      .createQueryBuilder('issue')
      .select([
        'issue.id AS issue_id',
        'issue.title AS issue_title',
        'issue.description AS issue_description',
        'issue.status AS issue_status',
        'issue.type AS issue_type',
        'issue.priority AS issue_priority',
        'issue.created_at AS issue_created_at',
        'issue.updated_at AS issue_updated_at',
        'reporter.id AS reporter_id',
        'reporter.full_name AS reporter_full_name',
        'assignee.id AS assignee_id',
        'assignee.full_name AS assignee_full_name',
      ])
      .leftJoin('issue.reporter', 'reporter')
      .leftJoin('issue.assignee', 'assignee')
      .getRawMany();
  
    return issues;
  }
  
  
  async viewIssue(id: number): Promise<Issue> {
    const issue = await this.issueRepository
      .createQueryBuilder('issue')
      .select([
        'issue.id AS issue_id',
        'issue.title AS issue_title',
        'issue.description AS issue_description',
        'issue.status AS issue_status',
        'issue.type AS issue_type',
        'issue.priority AS issue_priority',
        'issue.created_at AS issue_created_at',
        'issue.updated_at AS issue_updated_at',
        'reporter.id AS reporter_id',
        'reporter.full_name AS reporter_full_name',
        'assignee.id AS assignee_id',
        'assignee.full_name AS assignee_full_name',
      ])
      .leftJoin('issue.reporter', 'reporter')
      .leftJoin('issue.assignee', 'assignee')
      .where('issue.id = :id', { id })
      .getRawOne();
  
    if (!issue) {
      throw new NotFoundException('Issue not found');
    }
  
    return issue;
  }
  
  async update(id: number, updateIssueDto: UpdateIssueDto): Promise<String> {
    const issue = await this.issueRepository.findOneBy({ id });

    if (!issue) {
      throw new NotFoundException('Issue not found');
    }

    issue.title = updateIssueDto.title || issue.title;
    issue.description = updateIssueDto.description || issue.description;
    issue.status = updateIssueDto.status || issue.status;
    issue.type = updateIssueDto.type || issue.type;
    issue.priority = updateIssueDto.priority || issue.priority;

    if (updateIssueDto.reporter) {
      issue.reporter = updateIssueDto.reporter;
    }

    if (updateIssueDto.assignee) {
      issue.assignee = updateIssueDto.assignee;
    }

    await this.issueRepository.save(issue);
    return `Issue updated successfully`;
  }

  async remove(id: number): Promise<string> {
    const issue = await this.issueRepository.findOneBy({ id });

    if (!issue) {
      throw new NotFoundException('Issue not found');
    }

    await this.issueRepository.delete(id);
    return 'Issue deleted successfully';
  }
}
