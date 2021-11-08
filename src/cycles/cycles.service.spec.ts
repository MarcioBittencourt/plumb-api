import { Test, TestingModule } from '@nestjs/testing';
import { CyclesService } from './cycles.service';

describe('CyclesService', () => {
  let service: CyclesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CyclesService],
    }).compile();

    service = module.get<CyclesService>(CyclesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
