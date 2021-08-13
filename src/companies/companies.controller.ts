import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = await this.companiesService.create(createCompanyDto);
    return company;
  }

  @Get()
  async findAll(): Promise<Company[]> {
    const companies = await this.companiesService.findAll();
    return companies;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Company> {
    const company = await this.companiesService.findOne(+id);
    return company;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<UpdateResult> {
    const company = await this.companiesService.update(+id, updateCompanyDto);
    return company;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<DeleteResult> {
    const company = await this.companiesService.remove(+id);
    return company;
  }
}
