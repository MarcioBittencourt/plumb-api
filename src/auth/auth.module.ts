import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from 'src/employees/employees.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
