import express from 'express';
import { tracksRouter, usersRoutes } from '@routes/index';
import { PostgresDataSource } from '@config/db';

PostgresDataSource.initialize()
  .then(() => {
    console.log('Database connection is established');
    console.log('Starting the server');

    const PORT = 5080;
    const app = express();

    app.use(express.json());
    app.use(tracksRouter);
    app.use(usersRoutes);

    app.listen(PORT, () => {
      console.log(`The server has been started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Database connection could not be established', error);
    console.log('Stopping...');
    process.exit();
  });
