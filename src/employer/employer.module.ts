import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { EmployerRepository } from './employer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmployerRepository])],
  controllers: [EmployerController],
  providers: [EmployerService],
})
export class EmployerModule {}
