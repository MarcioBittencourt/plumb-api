import { Module } from '@nestjs/common';
import { GoalsService } from './goals.service';
import { GoalsController } from './goals.controller';
import { GoalsRepository } from './goals.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GoalsRepository])],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule {}
