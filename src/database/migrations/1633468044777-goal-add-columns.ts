import { MigrationInterface, QueryRunner } from 'typeorm';

export class goalAddColumns1633468044777 implements MigrationInterface {
  name = 'goalAddColumns1633468044777';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "goal" ADD "specific" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "goal" ADD "measurable" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "goal" ADD "attainable" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "goal" ADD "relevant" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "goal" ADD "time_bound" character varying`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "time_bound"`);
    await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "relevant"`);
    await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "attainable"`);
    await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "measurable"`);
    await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "specific"`);
  }
}
