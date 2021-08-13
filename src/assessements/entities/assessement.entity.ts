import { Employee } from 'src/employees/entities/employee.entity';
import { Question } from 'src/questions/entities/question.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('assessement')
export class Assessement {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @ManyToOne((type) => Employee, (evaluator) => evaluator.evaluations)
  @JoinColumn({
    name: 'evaluator_id',
    referencedColumnName: 'id',
  })
  evaluator: Employee | number;

  @ManyToOne((type) => Employee, (rated) => rated.ratings)
  @JoinColumn({
    name: 'rated_id',
    referencedColumnName: 'id',
  })
  rated: Employee | number;

  @Column({ type: 'varchar' })
  description: string;

  @OneToMany((type) => Question, (question) => question.assessement)
  questions: Question[];

  @Column({ type: 'int' })
  punctuation: number;
}
