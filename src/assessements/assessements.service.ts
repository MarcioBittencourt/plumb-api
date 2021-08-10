import { Injectable } from '@nestjs/common';
import { AssessementRepository } from './assessement.repository';
import { CreateAssessementDto } from './dto/create-assessement.dto';
import { UpdateAssessementDto } from './dto/update-assessement.dto';

@Injectable()
export class AssessementsService {
  constructor(private readonly repository: AssessementRepository) {}

  async create(createAssessementDto: CreateAssessementDto) {
    const assessement = await this.repository.save({ ...createAssessementDto });
    return assessement;
  }

  async findAll() {
    const assessements = await this.repository.find();
    return assessements;
  }

  async findOne(id: number) {
    const assessement = await this.repository.findOne(id);
    return assessement;
  }

  async update(id: number, updateAssessementDto: UpdateAssessementDto) {
    await this.repository.update(id, updateAssessementDto);
    return `This action updates a #${id} assessement`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} assessement`;
  }
}
