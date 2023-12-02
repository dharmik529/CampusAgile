import { IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';
import { IssueStatus } from '../../issue/entities/issue.entity';

export class CreateKanbanDto {
  @IsOptional()
  @IsNumber()
  projectId: number;

  @IsOptional()
  @IsNumber()
  issueId: number;

  @IsOptional()
  @IsNotEmpty()
  issueTitle: string;

  @IsOptional()
  @IsEnum(IssueStatus)
  issueStatus: IssueStatus;

  @IsNotEmpty()
  @IsNumber()
  assigneeId: number;

  @IsNotEmpty()
  @IsNumber()
  reporterId: number;
}
