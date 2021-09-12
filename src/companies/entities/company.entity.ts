import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ name: 'country', type: 'varchar' })
  country: string;
}
