import {MigrationInterface, QueryRunner} from "typeorm";

export class questionAnswerOptional1631926131257 implements MigrationInterface {
    name = 'questionAnswerOptional1631926131257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" ALTER COLUMN "answer" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" ALTER COLUMN "answer" SET NOT NULL`);
    }

}
