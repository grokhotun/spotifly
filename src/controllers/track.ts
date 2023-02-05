import { StatusCodes } from 'http-status-codes';

import { CreateTrackDTO, trackService } from '@services/track';
import { Request, Response } from 'express';

class TrackController {
  async get(request: Request, response: Response) {
    try {
      const track = trackService.get(1);
      response.json(track);
    } catch (error) {
      response.status(500).json(error);
    }
  }
  getAll(request: Request, response: Response) {
    return response.send('<h1>All track</h1>');
  }
  async create(
    request: Request<void, void, CreateTrackDTO>,
    response: Response,
  ) {
    try {
      const createdTrack = trackService.create(request.body);
      return response.json(createdTrack);
    } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  }
  update(request: Request, response: Response) {
    return response.send('<h1>Updated track</h1>');
  }
  delete(request: Request, response: Response) {
    return response.send('<h1>Delete track</h1>');
  }
}

const trackController = new TrackController();

export { trackController };
