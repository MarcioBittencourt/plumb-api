import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('assessement')
export class Assessement {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'evaluator_id', type: 'int' })
  evaluatorId: number;

  @Column({ name: 'rated_id', type: 'int' })
  ratedId: number;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int' })
  punctuation: number;
}
