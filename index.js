var fetch = require('node-fetch');

var Atrium  = function(apiKey, clientID) {
  this.credentials = {
      clientID,
      apiKey
  };
}

var LOCAL_URL = 'http://localhost:3000/api/';
var SAND_URL = 'https://sand-harvey.moneydesktop.com/api/';

Atrium.prototype._fetch = function(endpoint, method, params = null) {
  var body = params ? JSON.stringify(params) : null;

  console.log('body', body);

  return (fetch(LOCAL_URL + endpoint, {
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
Atrium.prototype.listUsers = function() {
  return this._fetch('users', 'GET');
};

Atrium.prototype.createUser = function(user) {
  return this._fetch('users', 'POST', user);
};

Atrium.prototype.readUser = function(guid) {
  return this._fetch('users/' + guid, 'GET');
};

Atrium.prototype.updateUser = function(user) {
  return this._fetch('users/' + user.guid, 'PUT', { user });
};

Atrium.prototype.deleteUser = function(user) {
  return this._fetch('users/' + user.guid, 'DELETE');
};

//Institutions
Atrium.prototype.listInstitutions = function() {
  return this._fetch('institutions', 'GET');
};

Atrium.prototype.readInstitution = function(guid) {
  return this._fetch('institutions/' + guid, 'GET');
};

//Credentials
Atrium.prototype.listCredentials = function(guid) {
  return this._fetch(`institutions/${guid}/credentials`, 'GET');
};

//Members
Atrium.prototype.listMember = function() {
  return this._fetch(`users/${userGuid}/members`, 'GET');
};

Atrium.prototype.createMember = function(user) {
  return this._fetch(`users/${userGuid}/members`, 'POST', member);
};

Atrium.prototype.readMember = function(guid) {
  return this._fetch(`users/${userGuid}/members/${guid}`, 'GET');
};

Atrium.prototype.updateMember = function(member) {
  return this._fetch(`users/${userGuid}/members/${member.guid}`, 'PUT', { member });
};

Atrium.prototype.deleteMember = function(member) {
  return this._fetch(`users/${userGuid}/members/${member.guid}`, 'DELETE');
};

Atrium.prototype.aggregateMember = function(guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/aggregate`, 'GET');
};

Atrium.prototype.resumeMemberAggregation = function(guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/resume`, 'GET');
};

Atrium.prototype.listMemberChallenges = function(guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/challenges`, 'GET');
};

Atrium.prototype.checkMemberStatus = function(guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/status`, 'GET');
};

module.exports = Atrium;
