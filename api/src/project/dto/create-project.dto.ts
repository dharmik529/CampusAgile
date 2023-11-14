import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
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

  createdByUser: User; // Modify the type to match your entity
}
