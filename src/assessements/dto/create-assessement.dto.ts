import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Question } from 'src/questions/entities/question.entity';

export class CreateAssessementDto {
  @IsNumber()
  @IsNotEmpty()
  evaluator: number;

  @IsNumber()
  @IsNotEmpty()
  rated: number;

  @IsString()
  @IsOptional()
  description: string;

  @IsDateString()
  @IsNotEmpty()
  requestDate: string;

  @IsDateString()
  @IsOptional()
  deadlineDate: string;

  @IsDateString()
  @IsOptional()
  concludedDate: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsOptional()
  questions?: [Question];

  @IsNumber()
  @IsOptional()
  punctuation: number;
}
