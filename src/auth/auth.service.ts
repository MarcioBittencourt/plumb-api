import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from 'src/employees/employees.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: EmployeesRepository) {}

  async auth(email: string, password: string): Promise<any> {
    const user = await this.repository.findOne({
      where: {
        email: email,
      },
    });
    return user ? (password === user.password ? user : false) : false;
  }
}
