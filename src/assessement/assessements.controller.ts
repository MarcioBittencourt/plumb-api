import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import AssessementEntity from './assessement.entity';
import { AssessementService } from './assessement.service';

@Controller('assessements')
export class AssessementsController {
  constructor(private assessementService: AssessementService) {}
  @Get()
  async getAll(): Promise<AssessementEntity[]> {
    return this.assessementService.getAll();
  }
  @Get(':id')
  async getById(@Param('id') id: number): Promise<AssessementEntity> {
    return this.assessementService.getById(id);
  }
  /*  @Post()
  async create(
    @Body() assessementEntity: AssessementEntity,
  ): Promise<AssessementEntity> {
    return this.assessementService.create(assessementEntity);
  } */
}
