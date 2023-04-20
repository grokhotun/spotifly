import { Track } from '@/types';

export const mapTracksToTableRecord = (tracks: Track[]) =>
  tracks.map((track) => ({ ...track, key: `${track.id}` }));
