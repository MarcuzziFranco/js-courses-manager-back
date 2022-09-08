import { Test, TestingModule } from '@nestjs/testing';
import { StudensController } from './studens.controller';
import { StudensService } from './studens.service';

describe('StudensController', () => {
  let controller: StudensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudensController],
      providers: [StudensService],
    }).compile();

    controller = module.get<StudensController>(StudensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
