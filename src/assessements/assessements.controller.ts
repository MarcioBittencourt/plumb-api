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

@Controller('assessements')
export class AssessementsController {
  constructor(private readonly assessementsService: AssessementsService) {}

  @Post()
  create(@Body() createAssessementDto: CreateAssessementDto) {
    return this.assessementsService.create(createAssessementDto);
  }

  @Get()
  findAll() {
    return this.assessementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assessementsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAssessementDto: UpdateAssessementDto,
  ) {
    return this.assessementsService.update(+id, updateAssessementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assessementsService.remove(+id);
  }
}
