import { PartialType } from '@nestjs/mapped-types';
import { CreateAssessementDto } from './create-assessement.dto';

export class UpdateAssessementDto extends PartialType(CreateAssessementDto) {}
