import { MigrationInterface, QueryRunner } from 'typeorm';

export class createEmployers1627770936950 implements MigrationInterface {
  name = 'createEmployers1627770936950';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "employer" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "role" character varying NOT NULL, "company_id" integer NOT NULL, CONSTRAINT "PK_74029e6b1f17a4c7c66d43cfd34" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "employer"`);
  }
}
