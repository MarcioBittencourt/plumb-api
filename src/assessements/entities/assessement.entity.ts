import { Employer } from 'src/employer/entities/employer.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('assessement')
export class Assessement {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne((type) => Employer, (evaluator) => evaluator.evaluations)
  @JoinColumn({
    name: 'evaluator_id',
    referencedColumnName: 'id',
  })
  evaluator: Employer | number;

  @ManyToOne((type) => Employer, (rated) => rated.ratings)
  @JoinColumn({
    name: 'rated_id',
    referencedColumnName: 'id',
  })
  rated: Employer | number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  punctuation: number;
}
