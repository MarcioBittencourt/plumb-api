import { Controller, Get } from '@nestjs/common';

@Controller('employer')
export class EmployerController {
  @Get()
  findAll(): EmployerController {
    return null;
  }
}
