import { MigrationInterface, QueryRunner } from 'typeorm';

export class TrackCreating1675610418744 implements MigrationInterface {
  name = 'TrackCreating1675610418744';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "artists" ADD CONSTRAINT "UQ_70c3685e197743b963339d158cc" UNIQUE ("name")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "artists" DROP CONSTRAINT "UQ_70c3685e197743b963339d158cc"`,
    );
  }
}
