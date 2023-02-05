import { Router } from 'express';
import { artistController } from '@controllers/index';

const artistsRouter = Router();

artistsRouter.get('/artists', artistController.getAll);
artistsRouter.get('/artists/:id', artistController.get);
artistsRouter.post('/artists', artistController.create);
artistsRouter.post('/artists/:id', artistController.update);
artistsRouter.delete('/artists/:id', artistController.delete);

export { artistsRouter };
