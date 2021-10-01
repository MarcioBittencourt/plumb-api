import {MigrationInterface, QueryRunner} from "typeorm";

export class addEmployeePhoto1631416273088 implements MigrationInterface {
    name = 'addEmployeePhoto1631416273088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" ADD "photo" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee" DROP COLUMN "photo"`);
    }

}
