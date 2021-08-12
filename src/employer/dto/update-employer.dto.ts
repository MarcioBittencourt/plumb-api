import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateEmployerDto } from './create-employer.dto';

export class UpdateEmployerDto extends PartialType(CreateEmployerDto) {
  @IsNotEmpty()
  id: string;
}
