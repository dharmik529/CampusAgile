import { IsNotEmpty, IsEnum, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { User } from '../../user/entities/user.entity'; // Import User entity

enum IssueStatus {
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

export class CreateIssueDto {
  @IsNotEmpty({ message: 'Title is required.' })
  @IsString({ message: 'Title must be a string.' })
  title: string;

  @IsNotEmpty({ message: 'Description is required.' })
  @IsString({ message: 'Description must be a string.' })
  description: string;

  @IsEnum(IssueStatus, { message: 'Invalid issue status value.' })
  status: IssueStatus;

  @IsEnum(IssueType, { message: 'Invalid issue type value.' })
  type: IssueType;

  @IsEnum(Priority, { message: 'Invalid priority value.' })
  priority: Priority;

  @IsNotEmpty({ message: 'Reporter details are required.' })
  @ValidateNested({ message: 'Reporter details are not valid.' })
  @Type(() => User)
  reporter: User;

  @IsNotEmpty({ message: 'Assignee details are required.' })
  @ValidateNested({ message: 'Assignee details are not valid.' })
  @Type(() => User)
  assignee: User;
}
