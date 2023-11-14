import { Controller, Get, Post, Body, Param, Patch, Delete, } from '@nestjs/common';
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) { }

  @Post('create')
  async create(@Body() createIssueDto: CreateIssueDto) {
    return this.issueService.create(createIssueDto);
  }

  @Get('findAll')
  async findAll() {
    return this.issueService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return this.issueService.viewIssue(+id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issueService.update(+id, updateIssueDto);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.issueService.remove(+id);
  }
}
