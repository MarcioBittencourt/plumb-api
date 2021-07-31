import { Injectable } from '@nestjs/common';
import { CreateAssessementDto } from './dto/create-assessement.dto';
import { UpdateAssessementDto } from './dto/update-assessement.dto';

@Injectable()
export class AssessementsService {
  create(createAssessementDto: CreateAssessementDto) {
    return 'This action adds a new assessement';
  }

  findAll() {
    return `This action returns all assessements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assessement`;
  }

  update(id: number, updateAssessementDto: UpdateAssessementDto) {
    return `This action updates a #${id} assessement`;
  }

  remove(id: number) {
    return `This action removes a #${id} assessement`;
  }
}
