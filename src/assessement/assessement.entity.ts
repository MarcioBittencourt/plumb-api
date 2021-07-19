export default class AssessementEntity {
  id: number;
  category: string;
  answer: string[];
  response: string[];

  constructor(
    id: number,
    category: string,
    answer: string[],
    response: string[],
  ) {
    this.id = id;
    this.category = category;
    this.answer = answer;
    this.response = response;
  }
}
