# MX Atrium
[![npm version](https://badge.fury.io/js/mx-atrium.svg)](http://badge.fury.io/js/mx-atrium)

## Description
This is a Node wrapper for the MX Atrium API. It is intended to be used as a helper for the implementation of a proxy server.

## Installation
```
npm install mx-atrium
```

## Usage
```
const Atrium = require('mx-atrium');

const AtriumClient = new Atrium.Client('API_KEY', 'CLIENT_ID', Atrium.environments.sand);
```

Sample Express.js route
```
app.get('/institutions', (request, response) => {
  AtriumClient.listInstitutions(request)
  .then(json => {
    response.json(json);
  });
});
```

There are two constants returned with the Atrium instance, `endpoints` and `environments`.

#### Atrium.environments
This returns a `sand` and `production` URL that must be passed to the new client.

#### Atrium.endpoints
This returns an array of objects that can be used to build routes for the server.

Sample object
```
{
  method: 'post',
  url: '/users',
  clientMethod: 'createUser'
}
```
