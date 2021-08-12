import { EntityRepository, Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {}
