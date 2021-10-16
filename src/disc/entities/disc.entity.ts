import { Employee } from 'src/employees/entities/employee.entity';
import { SurveyDisc } from 'src/survey-disc/entities/survey-disc.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('disc')
export class Disc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'profile', type: 'varchar' })
  profile: string;

  @OneToMany((type) => SurveyDisc, (survey) => survey.disc)
  survey: SurveyDisc[];

  @ManyToOne((type) => Employee, (employee) => employee.disc)
  @JoinColumn({
    name: 'employee_id',
    referencedColumnName: 'id',
  })
  employee: Employee | number;
}
