import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { Comment } from './comment';
import { Artist } from './artist';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: false,
  })
  name: string;

  @OneToMany(() => Comment, (comment) => comment.track)
  comments: Comment[];

  @ManyToOne(() => Artist, (artist) => artist.tracks, { nullable: false })
  artist: Artist;
}
