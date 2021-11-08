import { Assessement } from 'src/assessements/entities/assessement.entity';
import { Company } from 'src/companies/entities/company.entity';
import { Disc } from 'src/disc/entities/disc.entity';
import { Goal } from 'src/goals/entities/goal.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cycle')
export class Cycle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'type_assessment', type: 'varchar' })
  typeAssessment: string;

  @Column({ name: 'status', type: 'varchar' })
  status: string;

  @ManyToOne((type) => Company, (company) => company.cycle)
  @JoinColumn({
    name: 'company_id',
    referencedColumnName: 'id',
  })
  company: Company | number;

  @Column({ type: 'integer', name: 'cadency' })
  cadency: number;

  @Column({ type: 'timestamp', name: 'period_start' })
  periodStart: Date;

  @Column({ type: 'timestamp', name: 'period_end' })
  periodEnd: Date;
}
