import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';

import { CreateTrackDTO, trackService } from '@services/track';
import { listResponse } from '@utils/listResponse';

class TrackController {
  async get(request: Request<{ id: string }>, response: Response) {
    try {
      const id = Number(request.params.id);
      const track = await trackService.get(id);

      if (!track) {
        return response.sendStatus(StatusCodes.NOT_FOUND).json({
          code: StatusCodes.NOT_FOUND,
          message: `Track with ${id} not found`,
        });
      }

      response.json(track);
    } catch (error) {
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async getAll(_: Request, response: Response) {
    try {
      const tracks = await trackService.getAll();
      return response.json(listResponse(tracks));
    } catch (error) {
      return response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async create(
    request: Request<void, void, CreateTrackDTO>,
    response: Response,
  ) {
    try {
      const audio = request.files.audio;

      if (!audio || Array.isArray(audio)) {
        return response.sendStatus(StatusCodes.BAD_REQUEST).json({
          message: 'Audio has not been uploaded',
        });
      }

      const createdTrack = await trackService.create({
        ...request.body,
        audio,
      });

      return response.json(createdTrack);
    } catch (error) {
      response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const id = Number(request.params.id);
      const body = request.body;
      const updatedTrack = await trackService.update(id, body);
      return response.json(updatedTrack);
    } catch (error) {
      response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      const id = Number(request.params.id);
      await trackService.delete(id);
      return response.sendStatus(StatusCodes.OK);
    } catch (error) {
      response.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}

const trackController = new TrackController();

export { trackController };
