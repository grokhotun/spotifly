import { Router } from 'express';
import { trackController } from '@controllers/index';

const tracksRouter = Router();

tracksRouter.get('/tracks', trackController.getAll);
tracksRouter.get('/tracks/:id', trackController.get);
tracksRouter.post('/tracks', trackController.create);
tracksRouter.post('/tracks/:id', trackController.update);
tracksRouter.delete('/tracks/:id', trackController.delete);

export { tracksRouter };
