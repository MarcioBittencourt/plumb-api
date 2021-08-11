import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { QuestionsRepository } from './questions.repository';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionsRepository])],
  controllers: [QuestionsController],
  providers: [QuestionsService],
})
export class QuestionsModule {}
