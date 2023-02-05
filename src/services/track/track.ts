import { Track as TrackModel } from '@models/index';
import { PostgresDataSource } from '@config/db';

import { BaseService } from '../service';
import { artistService } from '../artist/artist';
import { CreateTrackDTO, TrackDTO, UpdateTrackDTO } from './types';

class Track extends BaseService<TrackModel> {
  async get(id: TrackDTO['id']) {
    try {
      const track = await this.repository.findOneBy({ id });
      return track;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const tracks = await this.repository.find();
      return tracks;
    } catch (error) {
      throw error;
    }
  }

  public async create(dto: CreateTrackDTO) {
    try {
      const artist = await artistService.get(dto.artist);
      const track = new TrackModel();
      track.artist = artist;
      track.name = dto.name;
      const createdTrack = await this.repository.save(track);
      return createdTrack;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, { name }: UpdateTrackDTO) {
    try {
      const updatedTrack = await this.repository.save({ id, name });
      return updatedTrack;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      await this.repository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}

const trackService = new Track(PostgresDataSource.getRepository(TrackModel));

export { trackService };
