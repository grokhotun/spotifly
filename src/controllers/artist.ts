import { artistService } from '@services/artist';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { listResponse } from 'src/utils/listResponse';

class ArtistController {
  async get(request: Request, response: Response) {
    try {
      const artist = await artistService.get(Number(request.params.id));
      return response.json(artist);
    } catch (error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }

  async getAll(_: Request, response: Response) {
    try {
      const artist = await artistService.getAll();
      return response.json(listResponse(artist));
    } catch (error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }
  async create(request: Request, response: Response) {
    try {
      if (!request.body.name) {
        return response.status(StatusCodes.BAD_REQUEST).json();
      }

      const createdArtist = await artistService.create(request.body);

      return response.json(createdArtist);
    } catch (error) {
      return response.status(StatusCodes.INTERNAL_SERVER_ERROR).json();
    }
  }
  update(request: Request, response: Response) {
    return response.send('<h1>Updated Artist</h1>');
  }
  delete(request: Request, response: Response) {
    return response.send('<h1>Delete Artist</h1>');
  }
}

const artistController = new ArtistController();

export { artistController };
