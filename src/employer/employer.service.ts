import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { EmployerRepository } from './employer.repository';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(EmployerRepository)
    private readonly repository: EmployerRepository,
  ) {}
  create(createEmployerDto: CreateEmployerDto) {
    const employer = this.repository.save(createEmployerDto);
    return employer;
  }

  findAll() {
    return `This action returns all employer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employer`;
  }

  update(id: number, updateEmployerDto: UpdateEmployerDto) {
    return `This action updates a #${id} employer`;
  }

  remove(id: number) {
    return `This action removes a #${id} employer`;
  }
}
