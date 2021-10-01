import { MigrationInterface, QueryRunner } from 'typeorm';

export class addColumnQuestionId1631979146292 implements MigrationInterface {
  name = 'addColumnQuestionId1631979146292';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "question" ADD "question_id" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "question" DROP COLUMN "question_id"`);
  }
}
