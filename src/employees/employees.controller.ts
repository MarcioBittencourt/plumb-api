import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    const employee = await this.employeesService.create(createEmployeeDto);
    return employee;
  }

  @Get()
  async findAll(): Promise<Employee[]> {
    const employees = await this.employeesService.findAll();
    return employees;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employee> {
    const employee = await this.employeesService.findOne(+id);
    return employee;
  }

  @Get('company/:companyId')
  async findByCompany(@Param('companyId') id: string): Promise<Employee[]> {
    const employees = await this.employeesService.findByCompany(+id);
    return employees;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<string> {
    const employee = await this.employeesService.update(+id, updateEmployeeDto);
    return employee;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const employee = await this.employeesService.remove(id);
    return employee;
  }
}
