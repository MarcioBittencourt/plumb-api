import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployerService } from './employer.service';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { Employer } from './entities/employer.entity';
import { UpdateResult } from 'typeorm';

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Post()
  async create(
    @Body() createEmployerDto: CreateEmployerDto,
  ): Promise<Employer> {
    const employer = await this.employerService.create(createEmployerDto);
    return employer;
  }

  @Get()
  async findAll(): Promise<Employer[]> {
    const employer = await this.employerService.findAll();
    return employer;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Employer> {
    const employer = await this.employerService.findOne(+id);
    return employer;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployerDto: UpdateEmployerDto,
  ): Promise<string> {
    const employer = await this.employerService.update(+id, updateEmployerDto);
    return employer;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const employer = await this.employerService.remove(+id);
    return employer;
  }
}
