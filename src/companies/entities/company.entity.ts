import { Cycle } from 'src/cycles/entities/cycle.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'company_name', type: 'varchar' })
  companyName: string;

  @Column({ name: 'business_name', type: 'varchar' })
  businessName: string;

  @Column({ name: 'business_register', type: 'varchar' })
  businessRegister: string;

  @Column({
    name: 'recover_email',
    type: 'varchar',
  })
  recoverEmail: string;

  @Column({
    name: 'password',
    type: 'varchar',
  })
  password: string;

  @Column({ name: 'country', type: 'varchar' })
  country: string;

  @OneToMany((type) => Employee, (employee) => employee.company)
  @JoinColumn({
    name: 'employee_id',
    referencedColumnName: 'id',
  })
  employees: Employee[];

  @OneToMany((type) => Cycle, (cycle) => cycle.company)
  @JoinColumn({
    name: 'cycle_id',
    referencedColumnName: 'id',
  })
  cycle: Cycle[];
}
