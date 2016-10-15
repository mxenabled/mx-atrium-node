const Atrium = require('./index.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const AtriumClient = new Atrium.Client('d4df52dfdc4076f56665762e000a4bf9164e0049', '699413fc-73c0-43ae-b0dd-0abaedd0d654', Atrium.environments.sand);

Atrium.endpoints.forEach(endpoint => {
  app[endpoint.method](endpoint.url, (request, response) => {
    AtriumClient[endpoint.clientMethod](request)
    .then(json => {
      response.json(json[endpoint.key]);
    });
  });
});

app.listen(3001);
