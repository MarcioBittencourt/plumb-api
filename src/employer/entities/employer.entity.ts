import { Assessement } from 'src/assessements/entities/assessement.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employer')
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  role: string;

  @OneToMany((type) => Assessement, (evaluation) => evaluation.evaluator)
  evaluations: Assessement[];

  @OneToMany((type) => Assessement, (rating) => rating.rated)
  ratings: Assessement[];

  @Column({ name: 'company_id', type: 'int' })
  companyId: number;
}
