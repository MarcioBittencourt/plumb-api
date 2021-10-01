import {MigrationInterface, QueryRunner} from "typeorm";

export class addAssessementConcludedDate1631650585860 implements MigrationInterface {
    name = 'addAssessementConcludedDate1631650585860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assessement" ADD "concluded_date" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assessement" DROP COLUMN "concluded_date"`);
    }

}
