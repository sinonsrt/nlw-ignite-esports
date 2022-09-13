import express from 'express';

express.json();

const app = express();

app.get('/', (request, response) => {
  response.json({
    message: 'NLW Ignite E-sports',
  });
});

app.listen(3333);
