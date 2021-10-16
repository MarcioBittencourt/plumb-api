import { EntityRepository, Repository } from 'typeorm';
import { SurveyDisc } from './entities/survey-disc.entity';

@EntityRepository(SurveyDisc)
export class SurveyDiscRepository extends Repository<SurveyDisc> {}
