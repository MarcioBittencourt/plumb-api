import { Disc } from 'src/disc/entities/disc.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('survey_disc')
export class SurveyDisc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column('text', { array: true, name: 'asking' })
  asking: string[];

  @Column({ name: 'more', type: 'varchar' })
  more: string;

  @Column({ name: 'less', type: 'varchar' })
  less: string;

  @ManyToOne((type) => Disc, (disc) => disc.survey)
  @JoinColumn({
    name: 'disc_id',
    referencedColumnName: 'id',
  })
  disc: Disc | number;
}
