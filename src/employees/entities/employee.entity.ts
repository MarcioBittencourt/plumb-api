import { Assessement } from 'src/assessements/entities/assessement.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Disc } from 'src/disc/entities/disc.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
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

  @Column({ type: 'varchar', nullable: true })
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

  @OneToMany((type) => Disc, (disc) => disc.employee)
  disc: Disc[];

  @ManyToOne((type) => Company, (company) => company.employees)
  @JoinColumn({
    name: 'company_id',
    referencedColumnName: 'id',
  })
  @Column({ name: 'company_id', type: 'int', nullable: true })
  company: Company | number;
}
