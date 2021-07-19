import { Injectable } from '@nestjs/common';
import { response } from 'express';
import AssessementEntity from './assessement.entity';
import AssessementRepository from './assessement.repository';

const assessementsRepository = new AssessementRepository();
const assessements = assessementsRepository.getAll();

@Injectable()
export class AssessementService {
  public getAll(): AssessementEntity[] {
    return assessementsRepository.getAll();
  }
  public getById(id: number) {
    const assessement = assessements.find((value) => value.id == id);
    return assessement;
  }
  public create(assessement: AssessementEntity) {}
  public update(assessement: AssessementEntity) {}
  public delete(id: number) {}
}
