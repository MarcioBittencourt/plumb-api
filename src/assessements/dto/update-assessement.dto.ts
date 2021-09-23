import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateAssessementDto } from './create-assessement.dto';

export class UpdateAssessementDto extends PartialType(CreateAssessementDto) {}
