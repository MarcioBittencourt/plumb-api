import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Employer } from './entities/employer.entity';

@EntityRepository(Employer)
export class EmployerRepository extends Repository<Employer> {}
