import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';
import { Attachment } from './entities/attachment.entity';

@Injectable()
export class AttachmentService {
  constructor(
    @InjectRepository(Attachment)
    private readonly attachmentRepository: Repository<Attachment>,
  ) {}

  async getAttachments(): Promise<Attachment[]> {
    return this.attachmentRepository.find();
  }

  async createAttachment(createAttachmentDto: CreateAttachmentDto): Promise<string> {
    const attachment = new Attachment();
    attachment.filename = createAttachmentDto.filename;
    attachment.size = createAttachmentDto.size;
    attachment.uploadDate = createAttachmentDto.uploadDate;
    attachment.path = createAttachmentDto.path;
    attachment.associatedEntity = createAttachmentDto.associatedEntity;

    await this.attachmentRepository.save(attachment);
    return 'The attachment was created successfully';
  }

  async findAllAttachments() {
    const attachments = await this.attachmentRepository.find();

    return attachments;
  }

  async viewAttachment(id: number) {
    const attachment = await this.attachmentRepository.findOneBy({ id });

    if (!attachment) {
      throw new NotFoundException('Attachment not found');
    }

    return attachment;
  }

  async updateAttachment(id: number, updateAttachmentDto: UpdateAttachmentDto): Promise<string> {
    const attachment = await this.attachmentRepository.findOneBy({ id });

    if (!attachment) {
      throw new NotFoundException(`Attachment with ID ${id} not found.`);
    }

    if (updateAttachmentDto.filename !== undefined) {
      attachment.filename = updateAttachmentDto.filename;
    }

    if (updateAttachmentDto.size !== undefined) {
      attachment.size = updateAttachmentDto.size;
    }

    if (updateAttachmentDto.uploadDate !== undefined) {
      attachment.uploadDate = updateAttachmentDto.uploadDate;
    }

    if (updateAttachmentDto.path !== undefined) {
      attachment.path = updateAttachmentDto.path;
    }

    if (updateAttachmentDto.associatedEntity !== undefined) {
      attachment.associatedEntity = updateAttachmentDto.associatedEntity;
    }

    await this.attachmentRepository.save(attachment);
    return `Attachment Updated Successfully`;
  }

  async removeAttachment(id: number): Promise<string> {
    const attachmentToRemove = await this.attachmentRepository.findOneBy({ id });

    if (!attachmentToRemove) {
      throw new NotFoundException('Attachment not found.');
    }

    await this.attachmentRepository.remove(attachmentToRemove);
    return 'Attachment has been removed';
  }
}
