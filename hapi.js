const Hapi = require('hapi');
const Atrium = require('./index.js');

const AtriumClient = new Atrium.Client('d4df52dfdc4076f56665762e000a4bf9164e0049', '699413fc-73c0-43ae-b0dd-0abaedd0d654', Atrium.environments.local);

const server = new Hapi.Server();

server.connection({ port: 3002});

Atrium.endpoints.forEach(endpoint => {
  const url = endpoint.url.split('/').map(piece => {
    if (piece.startsWith(':')) {
      return piece.replace(':', '{').concat('}');
    } else {
      return piece;
    }
  }).join('/');

  server.route({
    method: endpoint.method,
    path: url,
    handler: (request, reply) => {
      request.body = request.payload;
      AtriumClient[endpoint.clientMethod](request)
      .then(json => {
        reply(json[endpoint.key]);
      });
    }
  });
});

server.start((err) => {
  if (err) {
    throw err;
  }
});
