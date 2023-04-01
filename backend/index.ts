import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

import { tracksRouter, usersRoutes, artistsRouter } from '@routes/index';
import { PostgresDataSource } from '@config/db';

PostgresDataSource.initialize()
  .then(() => {
    console.log('Database connection is established');
    console.log('Starting the server');

    const PORT = 5080;
    const app = express();

    app.use(
      cors({
        origin: 'http://localhost:3000',
      }),
    );
    app.use(express.json());
    app.use(express.static('static'));
    app.use(fileUpload());
    app.use([tracksRouter, usersRoutes, artistsRouter]);

    app.listen(PORT, () => {
      console.log(`The server has been started on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('Database connection could not be established', error);
    console.log('Stopping...');
    process.exit();
  });
