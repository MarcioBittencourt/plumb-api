import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'country', type: 'varchar' })
  country: string;
}
