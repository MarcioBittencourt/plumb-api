import { Goal } from 'src/goals/entities/goal.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'status', type: 'varchar' })
  status: string;

  @ManyToOne((type) => Goal, (goal) => goal.tasks)
  @JoinColumn({
    name: 'goal_id',
    referencedColumnName: 'id',
  })
  goal: Goal | number;
}
