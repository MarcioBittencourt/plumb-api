import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tasksRepository } from './tasks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([tasksRepository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
