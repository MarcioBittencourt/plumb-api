import { Injectable } from '@nestjs/common';
import { CyclesService } from 'src/cycles/cycles.service';
import { EmployeesRepository } from 'src/employees/employees.repository';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CompaniesRepository } from './companies.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    private readonly repository: CompaniesRepository,
    private readonly employeesRepository: EmployeesRepository,
    private readonly cyclesService: CyclesService,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.repository.save(createCompanyDto);

    const employees = await this.employeesRepository.save(
      createCompanyDto.employees.map((employee) => {
        return { ...employee, company: company.id };
      }),
    );

    if (createCompanyDto.cycles) {
      createCompanyDto.cycles.map((cycle) => {
        this.cyclesService.create({ ...cycle, company: company.id });
      });
    }

    return company;
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.repository.find();
    return companies;
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.repository.findOne({
      where: [
        {
          id: id,
        },
      ],
      relations: ['employees', 'cycle'],
    });
    return company;
  }

  async update(
    id: number,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<UpdateResult> {
    const company = await this.repository.update(id, updateCompanyDto);
    return company;
  }

  async remove(id: number): Promise<DeleteResult> {
    const company = await this.repository.delete(id);
    return company;
  }
}
