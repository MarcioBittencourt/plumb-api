import { MigrationInterface, QueryRunner } from 'typeorm';

export class surveyDisc1635192925797 implements MigrationInterface {
  name = 'surveyDisc1635192925797';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "survey_disc" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "asking" text array NOT NULL, "more" character varying NOT NULL, "less" character varying NOT NULL, "disc_id" integer, CONSTRAINT "PK_1508d42cff5ae8d8187796191dc" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "survey_disc" ADD CONSTRAINT "FK_0f181f8221f9f4235a4cc460be7" FOREIGN KEY ("disc_id") REFERENCES "disc"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "survey_disc" DROP CONSTRAINT "FK_0f181f8221f9f4235a4cc460be7"`,
    );
    await queryRunner.query(`DROP TABLE "survey_disc"`);
  }
}
