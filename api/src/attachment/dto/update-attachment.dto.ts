import { PartialType } from '@nestjs/mapped-types';
import { CreateAttachmentDto } from './create-attachment.dto';

export class UpdateAttachmentDto extends PartialType(CreateAttachmentDto) {}
