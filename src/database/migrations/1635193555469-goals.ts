import { MigrationInterface, QueryRunner } from 'typeorm';

export class goals1635193555469 implements MigrationInterface {
  name = 'goals1635193555469';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "goal" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "goal_detail" character varying NOT NULL, "goal_measured_detail" character varying NOT NULL, "start_date" TIMESTAMP NOT NULL, "end_date" TIMESTAMP NOT NULL, "sector" character varying, "specific" character varying, "measurable" character varying, "attainable" character varying, "relevant" character varying, "time_bound" character varying, CONSTRAINT "PK_88c8e2b461b711336c836b1e130" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "goal_employees_employee" ("goalId" integer NOT NULL, "employeeId" integer NOT NULL, CONSTRAINT "PK_0720b881fd3009a5efc2720736d" PRIMARY KEY ("goalId", "employeeId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6f2f53e3febafad87ba485b652" ON "goal_employees_employee" ("goalId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5b46e5f3163d6efab0fa3e911d" ON "goal_employees_employee" ("employeeId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "goal_employees_employee" ADD CONSTRAINT "FK_6f2f53e3febafad87ba485b652c" FOREIGN KEY ("goalId") REFERENCES "goal"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "goal_employees_employee" ADD CONSTRAINT "FK_5b46e5f3163d6efab0fa3e911d0" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "goal_employees_employee" DROP CONSTRAINT "FK_5b46e5f3163d6efab0fa3e911d0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "goal_employees_employee" DROP CONSTRAINT "FK_6f2f53e3febafad87ba485b652c"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5b46e5f3163d6efab0fa3e911d"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6f2f53e3febafad87ba485b652"`,
    );
    await queryRunner.query(`DROP TABLE "goal_employees_employee"`);
    await queryRunner.query(`DROP TABLE "goal"`);
  }
}
