import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Track } from './track';

@Entity({ name: 'comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 255,
    unique: false,
    nullable: false,
  })
  comment: string;

  @ManyToOne(() => Track, (track) => track.comments)
  track: Track;
}
