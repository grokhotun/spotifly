import express from 'express';
import { tracksRouter, usersRoutes } from '@routes/index';

const PORT = 5080;
const app = express();

app.use(tracksRouter);
app.use(usersRoutes);

app.listen(PORT, () => {
  console.log(`The server has been started on port ${PORT}`);
});
