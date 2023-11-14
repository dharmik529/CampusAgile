import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreateAttachmentDto {
  @IsNotEmpty({ message: 'Filename is required.' })
  @IsString({ message: 'Filename must be a string.' })
  filename: string;

  @IsNotEmpty({ message: 'Size is required.' })
  @IsInt({ message: 'Size must be a number.' })
  size: number;

  @IsNotEmpty({ message: 'Upload date is required.' })
  uploadDate: Date;

  @IsNotEmpty({ message: 'Path is required.' })
  @IsString({ message: 'Path must be a string.' })
  path: string;

  @IsNotEmpty({ message: 'Associated entity is required.' })
  @IsString({ message: 'Associated entity must be a string.' })
  associatedEntity: string;
}
