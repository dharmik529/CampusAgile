import { Test, TestingModule } from '@nestjs/testing';
import { IssueController } from './issue.controller';
import { IssueService } from './issue.service';

describe('IssueController', () => {
  let controller: IssueController;
  let service: IssueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IssueController],
      providers: [IssueService],
    }).compile();

    controller = module.get<IssueController>(IssueController);
    service = module.get<IssueService>(IssueService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

});
