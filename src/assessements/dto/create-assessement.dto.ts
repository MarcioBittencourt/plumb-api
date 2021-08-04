import { IsNumber, IsString } from 'class-validator';

export class CreateAssessementDto {
  @IsNumber()
  evaluator: number;

  @IsNumber()
  rated: number;

  @IsString()
  description: string;

  @IsNumber()
  punctuation: number;
}
