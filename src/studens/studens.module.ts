import { Module } from '@nestjs/common';
import { StudensService } from './studens.service';
import { StudensController } from './studens.controller';

@Module({
  controllers: [StudensController],
  providers: [StudensService]
})
export class StudensModule {}
