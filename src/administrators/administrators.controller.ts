import { Controller, Get } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';

@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly administratorsService: AdministratorsService) {}

  @Get('admin')
  getAdmin(): string {
    return 'admin';
  }
}
