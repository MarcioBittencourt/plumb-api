import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Company } from 'src/companies/entities/company.entity';

export class CreateCycleDto {
  @IsString()
  @IsNotEmpty()
  cadency: string;

  @IsString()
  @IsNotEmpty()
  company: number | Company;

  @IsString()
  @IsNotEmpty()
  typeAssessment: string;

  //@IsDate()
  @IsNotEmpty()
  periodStart: Date;

  //@IsDate()
  @IsNotEmpty()
  periodEnd: Date;
}
