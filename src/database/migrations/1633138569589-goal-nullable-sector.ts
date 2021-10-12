import { MigrationInterface, QueryRunner } from 'typeorm';

export class goalNullableSector1633138569589 implements MigrationInterface {
  name = 'goalNullableSector1633138569589';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "goal" ALTER COLUMN "sector" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "goal" ALTER COLUMN "sector" SET NOT NULL`,
    );
  }
}
