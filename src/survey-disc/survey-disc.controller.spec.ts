import { Test, TestingModule } from '@nestjs/testing';
import { SurveyDiscController } from './survey-disc.controller';
import { SurveyDiscService } from './survey-disc.service';

describe('SurveyDiscController', () => {
  let controller: SurveyDiscController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SurveyDiscController],
      providers: [SurveyDiscService],
    }).compile();

    controller = module.get<SurveyDiscController>(SurveyDiscController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
