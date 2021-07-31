import { Test, TestingModule } from '@nestjs/testing';
import { AssessementsService } from './assessements.service';

describe('AssessementsService', () => {
  let service: AssessementsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AssessementsService],
    }).compile();

    service = module.get<AssessementsService>(AssessementsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
