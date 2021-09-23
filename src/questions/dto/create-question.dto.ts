import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsNumber()
  @IsNotEmpty()
  assessement: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  ask: string;

  @IsString()
  @IsOptional()
  answer: string;
}
