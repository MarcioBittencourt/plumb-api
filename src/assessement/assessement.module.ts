import { Module } from '@nestjs/common';
import { AssessementService } from './assessement.service';
import { AssessementsController } from './assessements.controller';

@Module({
  controllers: [AssessementsController],
  providers: [AssessementService],
})
export class AssessementModule {}
