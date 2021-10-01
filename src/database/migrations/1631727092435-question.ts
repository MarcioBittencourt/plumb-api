import {MigrationInterface, QueryRunner} from "typeorm";

export class question1631727092435 implements MigrationInterface {
    name = 'question1631727092435'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "question" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "category" character varying NOT NULL, "ask" character varying NOT NULL, "answer" character varying NOT NULL, "assessement_id" integer, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_cf72107ef6e5e5cd2ee22fbc114" FOREIGN KEY ("assessement_id") REFERENCES "assessement"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_cf72107ef6e5e5cd2ee22fbc114"`);
        await queryRunner.query(`DROP TABLE "question"`);
    }

}
