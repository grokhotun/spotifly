import { Request, Response } from 'express';

class UserController {
  async get(request: Request, response: Response) {
    return response.send('<h1>User</h1>');
  }
  getAll(request: Request, response: Response) {
    return response.send('<h1>All user</h1>');
  }
  create(request: Request, response: Response) {
    return response.send('<h1>Create user</h1>');
  }
  update(request: Request, response: Response) {
    return response.send('<h1>Updated user</h1>');
  }
  delete(request: Request, response: Response) {
    return response.send('<h1>Delete user</h1>');
  }
}

const userController = new UserController();

export { userController };
