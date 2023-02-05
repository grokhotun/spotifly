export interface TrackDTO {
  readonly id: number;
  readonly name: string;
  readonly artist: number;
}

export type CreateTrackDTO = Pick<TrackDTO, 'artist' | 'name'>;
export type UpdateTrackDTO = Pick<TrackDTO, 'name'>;
