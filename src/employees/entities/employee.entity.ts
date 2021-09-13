import { Assessement } from 'src/assessements/entities/assessement.entity';
import {
  Column,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('employee')
export class Employee {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar' })
  photo: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToMany((type) => Assessement, (evaluation) => evaluation.evaluator)
  evaluations: Assessement[];

  @OneToMany((type) => Assessement, (rating) => rating.rated)
  ratings: Assessement[];

  @Column({ name: 'company_id', type: 'int', nullable: true })
  companyId: number;
}
