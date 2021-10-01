import { MigrationInterface, QueryRunner } from 'typeorm';

export class companies1631414961212 implements MigrationInterface {
  name = 'companies1631414961212';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "company" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "company_name" character varying NOT NULL, "business_name" character varying NOT NULL, "business_register" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "company"`);
  }
}
