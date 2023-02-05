import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Comment } from './comment';

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
}
