import { Injectable } from '@nestjs/common';
import { AssessementRepository } from './assessement.repository';
import { CreateAssessementDto } from './dto/create-assessement.dto';
import { UpdateAssessementDto } from './dto/update-assessement.dto';

@Injectable()
export class AssessementsService {
  constructor(private readonly repository: AssessementRepository) {}

  create(createAssessementDto: CreateAssessementDto) {
    const assessement = this.repository.save(createAssessementDto);
    return assessement;
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    const assessement = this.repository.findOne(id);
    return assessement;
  }

  update(id: number, updateAssessementDto: UpdateAssessementDto) {
    this.repository.update(id, updateAssessementDto);
    return `This action updates a #${id} assessement`;
  }

  remove(id: number) {
    this.repository.delete(id);
    return `This action removes a #${id} assessement`;
  }
}
