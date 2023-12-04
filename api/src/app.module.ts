import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ProjectModule } from './project/project.module';
import { IssueModule } from './issue/issue.module';
import typeOrmConfig from './typeorm.config';
import { AttachmentModule } from './attachment/attachment.module';
import { AuthModule } from './auth/auth.module';
import { KanbanModule } from './kanban/kanban.module';
import { IssueKanban } from './kanban/entities/issue_kanban.entity';
import { Kanban } from './kanban/entities/kanban.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...typeOrmConfig, // Include other configurations from typeOrmConfig
      entities: [Kanban, IssueKanban],
    }),
    ConfigModule.forRoot(),
    UserModule,
    ProjectModule,
    IssueModule,
    AttachmentModule,
    AuthModule,
    KanbanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }