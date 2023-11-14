import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('attachment')
export class Attachment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  filename: string;

  @Column()
  size: number;

  @Column({ type: 'timestamp with time zone' }) // Ensure the correct data type
  uploadDate: Date;

  @Column()
  path: string;

  @Column()
  associatedEntity: string;
}
