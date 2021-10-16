import { Module } from '@nestjs/common';
import { SurveyDiscService } from './survey-disc.service';
import { SurveyDiscController } from './survey-disc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SurveyDiscRepository } from './survey-disc.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SurveyDiscRepository])],
  controllers: [SurveyDiscController],
  providers: [SurveyDiscService],
})
export class SurveyDiscModule {}
