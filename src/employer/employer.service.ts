import { Injectable } from '@nestjs/common';
import { CreateEmployerDto } from './dto/create-employer.dto';
import { UpdateEmployerDto } from './dto/update-employer.dto';
import { EmployerRepository } from './employer.repository';

@Injectable()
export class EmployerService {
  constructor(private readonly repository: EmployerRepository) {}

  create(createEmployerDto: CreateEmployerDto) {
    const employer = this.repository.save(createEmployerDto);
    return employer;
  }

  findAll() {
    const employers = this.repository.find();
    return employers;
  }

  findOne(id: number) {
    const employer = this.repository.findOne(id);
    return employer;
  }

  update(id: number, updateEmployerDto: UpdateEmployerDto) {
    const employer = this.repository.update({ id }, updateEmployerDto);
    return employer;
  }

  remove(id: number) {
    this.repository.delete(id);
    return `This action removes a #${id} employer`;
  }
}
