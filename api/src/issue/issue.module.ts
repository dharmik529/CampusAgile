import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IssueService } from './issue.service';
import { IssueController } from './issue.controller';
import { Issue } from './entities/issue.entity';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Issue, User]), UserModule],
  providers: [IssueService],
  controllers: [IssueController],
})
export class IssueModule { }
