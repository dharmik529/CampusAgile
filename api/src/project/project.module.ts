import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Kanban } from 'src/kanban/entities/kanban.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Project, Kanban])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule { }
