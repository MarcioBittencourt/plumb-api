import { Injectable } from '@nestjs/common';
import { DiscRepository } from './disc.repository';
import { CreateDiscDto } from './dto/create-disc.dto';
import { UpdateDiscDto } from './dto/update-disc.dto';

@Injectable()
export class DiscService {
  constructor(private readonly repository: DiscRepository) {}

  async create(createDiscDto: CreateDiscDto) {
    await this.repository.save(createDiscDto);
    return 'This action adds a new disc';
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateDiscDto: UpdateDiscDto) {
    await this.repository.update(id, updateDiscDto);
    return `This action updates a #${id} disc`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} disc`;
  }
}
