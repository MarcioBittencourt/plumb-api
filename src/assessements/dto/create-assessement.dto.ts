import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAssessementDto {
  @IsNumber()
  @IsNotEmpty()
  evaluator: number;

  @IsNumber()
  @IsNotEmpty()
  rated: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  punctuation: number;
}
