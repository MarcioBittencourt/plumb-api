import { MigrationInterface, QueryRunner } from 'typeorm';

export class tasks1632771473736 implements MigrationInterface {
  name = 'tasks1632771473736';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "task" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "status" character varying NOT NULL, "goal_id" integer, CONSTRAINT "PK_fb213f79ee45060ba925ecd576e" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "task" ADD CONSTRAINT "FK_b88f758a315e00d8fa86453fee4" FOREIGN KEY ("goal_id") REFERENCES "goal"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "task" DROP CONSTRAINT "FK_b88f758a315e00d8fa86453fee4"`,
    );
    await queryRunner.query(`DROP TABLE "task"`);
  }
}
