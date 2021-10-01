import { MigrationInterface, QueryRunner } from 'typeorm';

export class assessements1631561759697 implements MigrationInterface {
  name = 'assessements1631561759697';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "assessement" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying, "request_date" character varying NOT NULL, "deadline_date" character varying, "status" character varying NOT NULL, "punctuation" integer, "evaluator_id" integer, "rated_id" integer, CONSTRAINT "PK_57062fb5679c85ce473d0719ce0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "assessement" ADD CONSTRAINT "FK_0e21b8b46c3cfcb04aa9f4c7040" FOREIGN KEY ("evaluator_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "assessement" ADD CONSTRAINT "FK_3a4b368c7b489c100b25db8827c" FOREIGN KEY ("rated_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "assessement" DROP CONSTRAINT "FK_3a4b368c7b489c100b25db8827c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "assessement" DROP CONSTRAINT "FK_0e21b8b46c3cfcb04aa9f4c7040"`,
    );
    await queryRunner.query(`DROP TABLE "assessement"`);
  }
}
