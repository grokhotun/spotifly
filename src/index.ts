import express from 'express';

function start() {
  const PORT = 5080;
  const app = express();

  app.listen(PORT, () => {
    console.log(`The server has been started on port ${PORT}`);
  });

  app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>');
  });
}

start();
