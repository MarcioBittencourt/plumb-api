import { EntityRepository, Repository } from 'typeorm';
import { Assessement } from './entities/assessement.entity';

@EntityRepository(Assessement)
export class AssessementRepository extends Repository<Assessement> {}
