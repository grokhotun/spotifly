import { Router } from 'express';
import { userController } from '@controllers/index';

const usersRoutes = Router();

usersRoutes.get('/users', userController.getAll);
usersRoutes.get('/users/:id', userController.get);
usersRoutes.post('/users', userController.create);
usersRoutes.post('/users/:id', userController.update);
usersRoutes.delete('/users/:id', userController.delete);

export { usersRoutes };
