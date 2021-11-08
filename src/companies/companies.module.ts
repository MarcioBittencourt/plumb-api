import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { CompaniesRepository } from './companies.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from 'src/employees/employees.repository';
import { CyclesRepository } from 'src/cycles/cycles.repository';
import { CyclesService } from 'src/cycles/cycles.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CompaniesRepository,
      EmployeesRepository,
      CyclesRepository,
    ]),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService, CyclesService],
})
export class CompaniesModule {}
