import { IsNotEmpty, IsOptional } from 'class-validator';
import { Employee } from 'src/employees/entities/employee.entity';

export class CreateCompanyDto {
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
  employees?: [Employee];

  /*sprints ------ 
      feature: appo | disc | a360
      cadency: refAppoCadency.current?.value,
      period: { startDay: 1, endDay: 1 }
      lógica ------
        1 Mes, 1-5 do Mes, Até 2022
        total 24 registros
  */
}
