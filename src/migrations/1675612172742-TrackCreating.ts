import { MigrationInterface, QueryRunner } from 'typeorm';

export class TrackCreating1675612172742 implements MigrationInterface {
  name = 'TrackCreating1675612172742';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "tracks" ADD "artistId" integer`);
    await queryRunner.query(
      `ALTER TABLE "tracks" ADD CONSTRAINT "FK_62f595181306916265849fced48" FOREIGN KEY ("artistId") REFERENCES "artists"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tracks" DROP CONSTRAINT "FK_62f595181306916265849fced48"`,
    );
    await queryRunner.query(`ALTER TABLE "tracks" DROP COLUMN "artistId"`);
  }
}
