import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionsRepository } from './questions.repository';

@Injectable()
export class QuestionsService {
  constructor(private readonly repository: QuestionsRepository) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = await this.repository.save(createQuestionDto);
    return question;
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    const question = await this.repository.findOne(id);
    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    await this.repository.update(id, updateQuestionDto);
    return `This action updates a #${id} question`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} question`;
  }
}
