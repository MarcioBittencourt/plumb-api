import { Injectable } from '@nestjs/common';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { EmployerRepository } from './employer.repository';

@Injectable()
export class EmployerService {
  constructor(private readonly repository: EmployerRepository) {}

  async create(createEmployerDto: CreateEmployerDto) {
    const employer = await this.repository.save(createEmployerDto);
    return employer;
  }

  async findAll() {
    const employers = await this.repository.find();
    return employers;
  }

  async findOne(id: number) {
    const employer = await this.repository.findOne(id);
    return employer;
  }

  async update(id: number, updateEmployerDto: UpdateEmployerDto) {
    await this.repository.update({ id }, updateEmployerDto);
    return `This action updates a #${id} assessement`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} employer`;
  }
}
