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

  @Column({ name: 'sector', type: 'varchar', nullable: true })
  sector: string;

  @ManyToMany((type) => Employee)
  @JoinTable()
  employees: Employee[];

  @OneToMany((type) => Task, (tasks) => tasks.goal)
  @JoinTable()
  tasks: Task[];

  @Column({ name: 'specific', type: 'varchar', nullable: true })
  specific: string;

  @Column({ name: 'measurable', type: 'varchar', nullable: true })
  measurable: string;

  @Column({ name: 'attainable', type: 'varchar', nullable: true })
  attainable: string;

  @Column({ name: 'relevant', type: 'varchar', nullable: true })
  relevant: string;

  @Column({ name: 'time_bound', type: 'varchar', nullable: true })
  timeBound: string;
}
