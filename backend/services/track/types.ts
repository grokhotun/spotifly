import { UploadedFile } from 'express-fileupload';

export interface TrackDTO {
  readonly id: number;
  readonly name: string;
  readonly artist: number;
  readonly audio: string;
}

export interface CreateTrackDTO extends Pick<TrackDTO, 'artist' | 'name'> {
  audio: UploadedFile;
}

export type UpdateTrackDTO = Pick<TrackDTO, 'name' | 'audio'>;
