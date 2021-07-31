import { Module } from '@nestjs/common';
import { AssessementsService } from './assessements.service';
import { AssessementsController } from './assessements.controller';

@Module({
  controllers: [AssessementsController],
  providers: [AssessementsService]
})
export class AssessementsModule {}
