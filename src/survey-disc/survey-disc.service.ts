import { Injectable } from '@nestjs/common';
import { CreateSurveyDiscDto } from './dto/create-survey-disc.dto';
import { UpdateSurveyDiscDto } from './dto/update-survey-disc.dto';
import { SurveyDiscRepository } from './survey-disc.repository';

@Injectable()
export class SurveyDiscService {
  constructor(private readonly repository: SurveyDiscRepository) {}

  async create(createSurveyDiscDto: CreateSurveyDiscDto) {
    return await this.repository.save(createSurveyDiscDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async update(id: number, updateSurveyDiscDto: UpdateSurveyDiscDto) {
    await this.repository.update(id, updateSurveyDiscDto);
    return `This action updates a #${id} surveyDisc`;
  }

  async remove(id: number) {
    return await `This action removes a #${id} surveyDisc`;
  }
}
