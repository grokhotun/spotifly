import { MigrationInterface, QueryRunner } from 'typeorm';

export class TrackCreating1675628807299 implements MigrationInterface {
  name = 'TrackCreating1675628807299';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tracks" ADD "text" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "tracks" ADD "listens" integer NOT NULL DEFAULT '0'`,
    );
    await queryRunner.query(
      `ALTER TABLE "tracks" ADD "picture" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "tracks" ADD "audio" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "tracks" ADD CONSTRAINT "UQ_859372aa0c0ef881369705f476c" UNIQUE ("audio")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tracks" DROP CONSTRAINT "UQ_859372aa0c0ef881369705f476c"`,
    );
    await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "audio"`);
    await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "picture"`);
    await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "listens"`);
    await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "text"`);
  }
}
