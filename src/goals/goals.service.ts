import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { GoalsRepository } from './goals.repository';

@Injectable()
export class GoalsService {
  constructor(private readonly repository: GoalsRepository) {}

  async create(createGoalDto: CreateGoalDto) {
    const goal = await this.repository.save(createGoalDto);
    return goal;
  }

  async findAll() {
    const goals = await this.repository.find({
      relations: ['employees', 'tasks'],
    });
    return goals;
  }

  async findOne(id: number) {
    const goal = await this.repository.findOne(id, {
      relations: ['employees', 'tasks'],
    });
    return goal;
  }

  async update(id: number, updateGoalDto: UpdateGoalDto) {
    await this.repository.update({ id }, updateGoalDto);
    return `This action updates a #${id} goal`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} goal`;
  }
}
