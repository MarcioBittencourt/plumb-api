import { Module } from '@nestjs/common';
import { AssessementsService } from './assessements.service';
import { AssessementsController } from './assessements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssessementRepository } from './assessement.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AssessementRepository])],
  controllers: [AssessementsController],
  providers: [AssessementsService],
})
export class AssessementsModule {}
