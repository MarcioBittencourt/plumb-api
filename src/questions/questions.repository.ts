import { EntityRepository, Repository } from 'typeorm';
import { Question } from './entities/question.entity';

@EntityRepository(Question)
export class QuestionsRepository extends Repository<Question> {}
