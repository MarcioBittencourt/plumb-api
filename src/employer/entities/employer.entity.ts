import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('employer')
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column({ name: 'company_id', type: 'int' })
  companyId: number;
}
