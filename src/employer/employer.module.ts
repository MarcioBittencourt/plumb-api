import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employers.controller';

@Module({
  providers: [EmployerService],
  controllers: [EmployerController],
})
export class EmployerModule {}
