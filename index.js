var fetch = require('node-fetch');

var Atrium  = function(apiKey, clientID) {
  this.credentials = {
      clientID,
      apiKey
  };
}

var BASE_URL = 'http://localhost:3000/api/';
var SAND_URL = 'https://sand-harvey.moneydesktop.com/api/';

Atrium.prototype._fetch = function(endpoint, method, params = null) {
  var body = params ? JSON.stringify(params) : null;

  return (fetch(SAND_URL + endpoint, {
    method,
    body,
    headers: {
      'Content-Type': 'application/json',
      'MX-API-KEY': this.credentials.apiKey,
      'MX-CLIENT-ID': this.credentials.clientID
    }
  }))
  .then(function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      var error = new Error(response.statusText);

      error.response = response;
      throw error;
    }
  })
  .catch(function(err) {
    return err
  });
};

//Users
Atrium.prototype.getUsers = function() {
  return this._fetch('users', 'GET');
};

Atrium.prototype.createUser = function(user) {
  return this._fetch('users', 'POST', user);
};

Atrium.prototype.getUser = function(guid) {
  return this._fetch('users/' + guid, 'GET');
};

module.exports = Atrium;
