import { Controller, Get } from '@nestjs/common';
import Company from './company.entity';

@Controller('company')
export class CompanyController {
  @Get()
  findAll(): Company[] {
    return null;
  }
}
