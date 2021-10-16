import { PartialType } from '@nestjs/mapped-types';
import { CreateSurveyDiscDto } from './create-survey-disc.dto';

export class UpdateSurveyDiscDto extends PartialType(CreateSurveyDiscDto) {}
