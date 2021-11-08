import { EntityRepository, Repository } from 'typeorm';
import { Cycle } from './entities/cycle.entity';

@EntityRepository(Cycle)
export class CyclesRepository extends Repository<Cycle> {}
