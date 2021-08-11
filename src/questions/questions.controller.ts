import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Question } from './entities/question.entity';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(
    @Body() createQuestionDto: CreateQuestionDto,
  ): Promise<Question> {
    const question = await this.questionsService.create(createQuestionDto);
    return question;
  }

  @Get()
  async findAll(): Promise<Question[]> {
    const questions = await this.questionsService.findAll();
    return questions;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Question> {
    const question = await this.questionsService.findOne(+id);
    return question;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ): Promise<string> {
    const question = await this.questionsService.update(+id, updateQuestionDto);
    return question;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const question = await this.questionsService.remove(+id);
    return question;
  }
}
