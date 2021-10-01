import { Employee } from 'src/employees/entities/employee.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  Entity,
  Generated,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity('goal')
export class Goal {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'goal_detail', type: 'varchar' })
  goalDetail: string;

  @Column({ name: 'goal_measured_detail', type: 'varchar' })
  goalMeasuredDetail: string;

  @Column({ name: 'start_date', type: 'varchar' })
  startDate: string;

  @Column({ name: 'end_date', type: 'varchar' })
  endDate: string;

  @Column({ name: 'sector', type: 'varchar' })
  sector: string;

  @ManyToMany((type) => Employee)
  @JoinTable()
  employees: Employee[];

  @OneToMany((type) => Task, (tasks) => tasks.goal)
  @JoinTable()
  tasks: Task[];
}
