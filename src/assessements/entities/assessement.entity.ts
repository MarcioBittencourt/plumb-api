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

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'varchar', name: 'request_date' })
  requestDate: string;

  @Column({ type: 'varchar', name: 'deadline_date', nullable: true })
  deadlineDate: string;

  @Column({ type: 'varchar', name: 'concluded_date', nullable: true })
  concludedDate: string;

  @Column({ type: 'varchar', name: 'status' })
  status: string;

  @OneToMany((type) => Question, (question) => question.assessement)
  questions: Question[];

  @Column({ type: 'int', nullable: true })
  punctuation: number;
}
