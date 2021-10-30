import { MigrationInterface, QueryRunner } from 'typeorm';

export class disc1635192806698 implements MigrationInterface {
  name = 'disc1635192806698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "disc" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "profile" character varying NOT NULL, "creation_date" TIMESTAMP NOT NULL DEFAULT now(), "employee_id" integer, CONSTRAINT "PK_53d9ee4b5b8b37daf0d9d0da9b3" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "disc" ADD CONSTRAINT "FK_2a7a736a5cb141d6c984b4cd4d4" FOREIGN KEY ("employee_id") REFERENCES "employee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "disc" DROP CONSTRAINT "FK_2a7a736a5cb141d6c984b4cd4d4"`,
    );
    await queryRunner.query(`DROP TABLE "disc"`);
  }
}
