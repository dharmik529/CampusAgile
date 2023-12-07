import { IsNotEmpty, IsString, IsEnum, IsOptional, IsEmail } from 'class-validator';
import { User } from '../../user/entities/user.entity';
import { ProjectPriority, ProjectStatus } from '../entities/project.entity';

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsEnum(ProjectPriority)
  priority: ProjectPriority;

  @IsOptional()
  @IsEnum(ProjectStatus)
  status: ProjectStatus;

  @IsNotEmpty()
  @IsEmail() // Validate that createdByUser is a valid email
  createdByUser: string; // Change the type to string for the email
}
