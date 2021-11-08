import {MigrationInterface, QueryRunner} from "typeorm";

export class cycle1635719399085 implements MigrationInterface {
    name = 'cycle1635719399085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "cycle" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "type_assessment" character varying NOT NULL, "status" character varying NOT NULL, "cadency" integer NOT NULL, "period_start" TIMESTAMP NOT NULL, "period_end" TIMESTAMP NOT NULL, "company_id" integer, CONSTRAINT "PK_af5984cb5853f1f88109c9ea2b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "disc" ADD "cycle_id" integer`);
        await queryRunner.query(`ALTER TABLE "goal" ADD "cycle_id" integer`);
        await queryRunner.query(`ALTER TABLE "assessement" ADD "cycle_id" integer`);
        await queryRunner.query(`ALTER TABLE "disc" ADD CONSTRAINT "FK_798ed684ebab3a2fc977e6b9da8" FOREIGN KEY ("cycle_id") REFERENCES "cycle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "goal" ADD CONSTRAINT "FK_038502a54f495e80cef59c52d09" FOREIGN KEY ("cycle_id") REFERENCES "cycle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cycle" ADD CONSTRAINT "FK_c2a1e5c86d5a9157810191147b4" FOREIGN KEY ("company_id") REFERENCES "company"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "assessement" ADD CONSTRAINT "FK_3a2ae1bf76392aab4c00d1bea17" FOREIGN KEY ("cycle_id") REFERENCES "cycle"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "assessement" DROP CONSTRAINT "FK_3a2ae1bf76392aab4c00d1bea17"`);
        await queryRunner.query(`ALTER TABLE "cycle" DROP CONSTRAINT "FK_c2a1e5c86d5a9157810191147b4"`);
        await queryRunner.query(`ALTER TABLE "goal" DROP CONSTRAINT "FK_038502a54f495e80cef59c52d09"`);
        await queryRunner.query(`ALTER TABLE "disc" DROP CONSTRAINT "FK_798ed684ebab3a2fc977e6b9da8"`);
        await queryRunner.query(`ALTER TABLE "assessement" DROP COLUMN "cycle_id"`);
        await queryRunner.query(`ALTER TABLE "goal" DROP COLUMN "cycle_id"`);
        await queryRunner.query(`ALTER TABLE "disc" DROP COLUMN "cycle_id"`);
        await queryRunner.query(`DROP TABLE "cycle"`);
    }

}
