import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AssessementsService } from './assessements.service';
import { CreateAssessementDto } from './dto/create-assessement.dto';
import { UpdateAssessementDto } from './dto/update-assessement.dto';
import { Assessement } from './entities/assessement.entity';

@Controller('assessements')
export class AssessementsController {
  constructor(private readonly assessementsService: AssessementsService) {}

  @Post()
  async create(
    @Body() createAssessementDto: CreateAssessementDto,
  ): Promise<Assessement> {
    return await this.assessementsService.create(createAssessementDto);
  }

  @Get()
  async findAll(): Promise<Assessement[]> {
    const assessements = await this.assessementsService.findAll();
    return assessements;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Assessement> {
    const assessement = await this.assessementsService.findOne(+id);
    return assessement;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAssessementDto: UpdateAssessementDto,
  ): Promise<string> {
    const assessement = await this.assessementsService.update(
      +id,
      updateAssessementDto,
    );
    return assessement;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    const assessement = await this.assessementsService.remove(+id);
    return assessement;
  }
}
