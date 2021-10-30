import {MigrationInterface, QueryRunner} from "typeorm";

export class assessementEditColumnDescription1635277642876 implements MigrationInterface {
    name = 'assessementEditColumnDescription1635277642876'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assessement" ALTER COLUMN "description" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assessement" ALTER COLUMN "description" SET NOT NULL`);
    }

}
