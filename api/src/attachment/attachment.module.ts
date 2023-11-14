import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttachmentService } from './attachment.service';
import { AttachmentController } from './attachment.controller';
import { Attachment } from './entities/attachment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attachment]), /* Add any additional modules if needed */],
  providers: [AttachmentService],
  controllers: [AttachmentController],
})
export class AttachmentModule {}
