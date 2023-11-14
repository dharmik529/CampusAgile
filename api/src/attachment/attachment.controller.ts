import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttachmentService } from './attachment.service';
import { CreateAttachmentDto } from './dto/create-attachment.dto';
import { UpdateAttachmentDto } from './dto/update-attachment.dto';

@Controller('attachment')
export class AttachmentController {
  constructor(private readonly attachmentService: AttachmentService) {}

  @Get('findAll')
  async findAll() {
    return this.attachmentService.findAllAttachments();
  }

  @Post('create')
  async create(@Body() createAttachmentDto: CreateAttachmentDto) {
    return this.attachmentService.createAttachment(createAttachmentDto);
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.attachmentService.viewAttachment(+id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateAttachmentDto: UpdateAttachmentDto) {
    return this.attachmentService.updateAttachment(+id, updateAttachmentDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.attachmentService.removeAttachment(+id);
  }
}
