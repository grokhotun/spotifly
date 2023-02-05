import { Repository } from 'typeorm';

import { PostgresDataSource } from '@config/db';
import { Artist as ArtistModel } from '@models/index';

import { CreateArtistDTO, UpdateArtistDTO } from './types';

class Artist {
  private repository: Repository<ArtistModel>;

  constructor() {
    this.repository = PostgresDataSource.getRepository(ArtistModel);
  }

  async create(dto: CreateArtistDTO) {
    try {
      const newArtist = this.repository.create(dto);
      const createdArtist = await this.repository.save(newArtist);

      return createdArtist;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, { name }: UpdateArtistDTO) {
    try {
      const updatedArtist = await this.repository.save({ id, name });
      return updatedArtist;
    } catch (error) {
      throw error;
    }
  }

  async get(id: number) {
    try {
      const artist = await this.repository.findOneBy({ id });
      return artist;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const artist = await this.repository.find({
        relations: { tracks: true },
      });
      return artist;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: number) {
    try {
      await this.repository.delete({ id });
    } catch (error) {
      throw error;
    }
  }
}

const artistService = new Artist();

export { artistService };
