import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from './employees.repository';
import { Employee } from './entities/employee.entity';

@Injectable()
export class EmployeesService {
  constructor(private readonly repository: EmployeesRepository) {}

  async create(createEmployeesDto: CreateEmployeeDto) {
    const employee = await this.repository.save(createEmployeesDto);
    return employee;
  }

  async findAll() {
    const employees = await this.repository.find();
    return employees;
  }

  async findByCompany(company_id: number): Promise<Employee[]> {
    return await this.repository.find({
      where: { company: company_id },
    });
  }

  async findOne(id: number) {
    const employee = await this.repository.findOne(id);
    return employee;
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    await this.repository.update({ id }, updateEmployeeDto);
    return `This action updates a #${id} employee`;
  }

  async remove(id: string) {
    await this.repository.delete(id);
    return `This action removes a #${id} employee`;
  }
}
