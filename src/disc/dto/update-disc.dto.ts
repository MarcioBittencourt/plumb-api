import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscDto } from './create-disc.dto';

export class UpdateDiscDto extends PartialType(CreateDiscDto) {}
