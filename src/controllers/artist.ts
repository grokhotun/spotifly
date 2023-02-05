import { artistService } from '@services/artist/artist';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { listResponse } from 'src/utils/listResponse';

class ArtistController {
  async get(request: Request, response: Response) {
    try {
      const artist = await artistService.get(Number(request.params.id));
      return response.json(artist);
    } catch (error) {
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async getAll(_: Request, response: Response) {
    try {
      const artist = await artistService.getAll();
      return response.json(listResponse(artist));
    } catch (error) {
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
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
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const id = Number(request.params.id);
      const body = request.body;

      const updatedArtist = await artistService.update(id, body);
      return response.json(updatedArtist);
    } catch (error) {
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const id = Number(request.params.id);
      await artistService.delete(id);
      return response.sendStatus(StatusCodes.OK);
    } catch (error) {
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

const artistController = new ArtistController();

export { artistController };
