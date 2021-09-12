import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { CompaniesRepository } from './companies.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from 'src/employees/employees.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CompaniesRepository, EmployeesRepository]),
  ],
  controllers: [CompaniesController],
  providers: [CompaniesService],
})
export class CompaniesModule {}
