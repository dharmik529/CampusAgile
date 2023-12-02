import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { KanbanService } from './kanban.service';
import { CreateKanbanDto } from './dto/create-kanban.dto';

@Controller('kanban')
export class KanbanController {
  constructor(private readonly kanbanService: KanbanService) {}

  @Post('create')
  async createKanban(@Body() createKanbanDto: CreateKanbanDto){
    return this.kanbanService.create(createKanbanDto);
  }

  @Get('findAll')
  async findAll(){
    return this.kanbanService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.kanbanService.findOne(+id);
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.kanbanService.remove(+id);
  }

}
