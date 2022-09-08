import { Test, TestingModule } from '@nestjs/testing';
import { StudensService } from './studens.service';

describe('StudensService', () => {
  let service: StudensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudensService],
    }).compile();

    service = module.get<StudensService>(StudensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
