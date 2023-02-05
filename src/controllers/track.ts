import { trackModel } from '@models/track';
import { Request, Response } from 'express';

class TrackController {
  async get(request: Request, response: Response) {
    try {
      const track = trackModel.get(1);
      response.json(track);
    } catch (error) {
      response.status(500).json(error);
    }
    return response.send('<h1>Track</h1>');
  }
  getAll(request: Request, response: Response) {
    return response.send('<h1>All track</h1>');
  }
  create(request: Request, response: Response) {
    return response.send('<h1>Create track</h1>');
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
