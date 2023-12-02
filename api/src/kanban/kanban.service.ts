import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateKanbanDto } from './dto/create-kanban.dto';
import { Kanban } from './entities/kanban.entity';

@Injectable()
export class KanbanService {
  constructor(
    @InjectRepository(Kanban)
    private readonly kanbanRepository: Repository<Kanban>,
  ) {}

  async create(createKanbanDto: CreateKanbanDto): Promise<Kanban> {
    const kanban = this.kanbanRepository.create(createKanbanDto);
    return await this.kanbanRepository.save(kanban);
  }

  async findAll(): Promise<Kanban[]> {
    return this.kanbanRepository.find();
  }

  async findOne(id: number): Promise<Kanban> {
    const kanban = await this.kanbanRepository.findOneBy({ id });

    if (!kanban) {
      throw new NotFoundException('Kanban entry not found');
    }

    return kanban;
  }

  async remove(id: number): Promise<void> {
    const kanban = await this.kanbanRepository.findOneBy({ id });

    if (!kanban) {
      throw new NotFoundException('Kanban entry not found');
    }

    await this.kanbanRepository.remove(kanban);
  }
}
