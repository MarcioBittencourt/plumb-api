import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { tasksRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly repository: tasksRepository) {}

  async create(createTaskDto: CreateTaskDto) {
    return await this.repository.save(createTaskDto);
  }

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: number) {
    return await this.repository.findOne(id);
  }

  async findByGoal(goalId: number) {
    return await this.repository.find({
      where: { goal: goalId },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    await this.repository.update(id, updateTaskDto);
    return `This action updates a #${id} task`;
  }

  async remove(id: number) {
    await this.repository.delete(id);
    return `This action removes a #${id} task`;
  }
}
