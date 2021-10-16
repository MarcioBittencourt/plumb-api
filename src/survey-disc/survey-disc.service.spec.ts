import { Test, TestingModule } from '@nestjs/testing';
import { SurveyDiscService } from './survey-disc.service';

describe('SurveyDiscService', () => {
  let service: SurveyDiscService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SurveyDiscService],
    }).compile();

    service = module.get<SurveyDiscService>(SurveyDiscService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
