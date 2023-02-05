import { Track as TrackModel } from '@models/index';

import { PostgresDataSource } from '@config/db';
import { fileService } from '@services/file';
import { BaseService } from '@services/service';
import { artistService } from '@services/artist';

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
      const fileName = await fileService.save(dto.audio);
      const track = new TrackModel();

      track.artist = artist;
      track.name = dto.name;
      track.audio = fileName;

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
