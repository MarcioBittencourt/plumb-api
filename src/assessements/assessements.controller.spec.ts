import { Test, TestingModule } from '@nestjs/testing';
import { AssessementsController } from './assessements.controller';
import { AssessementsService } from './assessements.service';

describe('AssessementsController', () => {
  let controller: AssessementsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssessementsController],
      providers: [AssessementsService],
    }).compile();

    controller = module.get<AssessementsController>(AssessementsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
