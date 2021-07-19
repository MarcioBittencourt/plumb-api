import AssessementEntity from './assessement.entity';

export default class AssessementRepository {
  private assessements: AssessementEntity[];
  constructor() {
    this.assessements = [
      { id: 1, category: 'duvida', answer: ['pode ser'], response: ['certo'] },
    ];
  }
  public getAll(): AssessementEntity[] {
    return this.assessements;
  }
}
