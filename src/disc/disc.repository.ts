import { EntityRepository, Repository } from 'typeorm';
import { Disc } from './entities/disc.entity';

@EntityRepository(Disc)
export class DiscRepository extends Repository<Disc> {}
