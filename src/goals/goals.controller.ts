import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { Goal } from './entities/goal.entity';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  async create(@Body() createGoalDto: CreateGoalDto): Promise<Goal> {
    const goal = await this.goalsService.create(createGoalDto);
    return goal;
  }

  @Get()
  async findAll() {
    const goals = await this.goalsService.findAll();
    return goals;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const goal = await this.goalsService.findOne(+id);
    return goal;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateGoalDto: UpdateGoalDto) {
    const goal = await this.goalsService.update(+id, updateGoalDto);
    return goal;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const goal = await this.goalsService.remove(+id);
    return goal;
  }
}
