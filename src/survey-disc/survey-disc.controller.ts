import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SurveyDiscService } from './survey-disc.service';
import { CreateSurveyDiscDto } from './dto/create-survey-disc.dto';
import { UpdateSurveyDiscDto } from './dto/update-survey-disc.dto';

@Controller('survey-disc')
export class SurveyDiscController {
  constructor(private readonly surveyDiscService: SurveyDiscService) {}

  @Post()
  async create(@Body() createSurveyDiscDto: CreateSurveyDiscDto) {
    return await this.surveyDiscService.create(createSurveyDiscDto);
  }

  @Get()
  async findAll() {
    return await this.surveyDiscService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.surveyDiscService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSurveyDiscDto: UpdateSurveyDiscDto,
  ) {
    return await this.surveyDiscService.update(+id, updateSurveyDiscDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.surveyDiscService.remove(+id);
  }
}
