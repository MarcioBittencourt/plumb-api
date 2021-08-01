import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { EmployerRepository } from './employer.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  controllers: [EmployerController],
  providers: [EmployerService, EmployerRepository],
  imports: [TypeOrmModule.forFeature([EmployerRepository])],
})
export class EmployerModule {}
