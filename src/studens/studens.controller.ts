import { Controller } from '@nestjs/common';
import { StudensService } from './studens.service';

@Controller('studens')
export class StudensController {
  constructor(private readonly studensService: StudensService) {}
}
