import { IsNotEmpty, IsOptional } from 'class-validator';
import { CreateCycleDto } from 'src/cycles/dto/create-cycle.dto';
import { Cycle } from 'src/cycles/entities/cycle.entity';
import { Employee } from 'src/employees/entities/employee.entity';

export class CreateCompanyDto {
  @IsOptional()
  id: number;

  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  businessName: string;

  @IsNotEmpty()
  recoverEmail: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  businessRegister: string;

  @IsOptional()
  employees?: Employee[];

  @IsOptional()
  cycles?: CreateCycleDto[];
}
