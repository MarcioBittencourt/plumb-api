import { IsString } from 'class-validator';

export class CreateEmployerDto {
  @IsString()
  name: string;
  @IsString()
  role: string;
}
