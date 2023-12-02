import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KanbanController } from './kanban.controller';
import { KanbanService } from './kanban.service';
import { Kanban } from './entities/kanban.entity';
import { Project } from '../project/entities/project.entity';
import { Issue } from '../issue/entities/issue.entity';
import { User } from '../user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kanban, Project, Issue, User])],
  controllers: [KanbanController],
  providers: [KanbanService],
})
export class KanbanModule {}

