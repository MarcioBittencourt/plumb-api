import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
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

  @IsString()
  @IsNotEmpty()
  requestDate: string;

  @IsString()
  @IsOptional()
  deadlineDate: string;

  @IsString()
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
