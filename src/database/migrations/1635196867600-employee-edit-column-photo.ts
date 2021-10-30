import { MigrationInterface, QueryRunner } from 'typeorm';

export class employeeEditColumnPhoto1635196867600
  implements MigrationInterface
{
  name = 'employeeEditColumnPhoto1635196867600';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" ALTER COLUMN "photo" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "employee" ALTER COLUMN "photo" SET NOT NULL`,
    );
  }
}
