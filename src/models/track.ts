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

  @ManyToOne(() => Artist, (artist) => artist.tracks, { nullable: false })
  artist: Artist;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: true,
  })
  text: string;

  @Column({
    type: 'int',
    default: 0,
  })
  listens: number;

  @Column({
    type: 'varchar',
    unique: false,
    nullable: true,
  })
  picture: string;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  audio: string;

  @OneToMany(() => Comment, (comment) => comment.track)
  comments: Comment[];
}
