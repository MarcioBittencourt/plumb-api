import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CompaniesRepository } from './companies.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(private readonly repository: CompaniesRepository) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.repository.save(createCompanyDto);
    return company;
  }

  async findAll(): Promise<Company[]> {
    const companies = await this.repository.find();
    return companies;
  }

  async findOne(id: number): Promise<Company> {
    const company = await this.repository.findOne(id);
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
