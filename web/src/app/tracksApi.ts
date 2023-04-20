import { get } from '@/app/client';
import { Track } from '@/types';

export const tracksApi = {
  list() {
    return get<Track[]>('/api/tracks/');
  },
};
