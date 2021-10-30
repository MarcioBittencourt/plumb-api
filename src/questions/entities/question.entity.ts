import { IsOptional } from 'class-validator';
import { Assessement } from 'src/assessements/entities/assessement.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'question_id', type: 'varchar' })
  questionId: string;

  @ManyToOne((type) => Assessement, (assessement) => assessement.questions)
  @JoinColumn({
    name: 'assessement_id',
    referencedColumnName: 'id',
  })
  assessement: Assessement | number;

  @Column({ name: 'category', type: 'varchar' })
  category: string;

  @Column({ name: 'ask', type: 'varchar' })
  ask: string;

  @Column({ name: 'answer', type: 'varchar', nullable: true })
  answer: string;
}
