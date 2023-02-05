import { MigrationInterface, QueryRunner } from 'typeorm';

export class TrackCreating1675607833348 implements MigrationInterface {
  name = 'TrackCreating1675607833348';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "tracks" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_242a37ffc7870380f0e611986e8" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "tracks"`);
  }
}
