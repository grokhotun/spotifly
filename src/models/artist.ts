import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Track } from './track';

@Entity({ name: 'artists' })
export class Artist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  name: string;

  @OneToMany(() => Track, (track) => track.artist)
  tracks: Track[];
}
