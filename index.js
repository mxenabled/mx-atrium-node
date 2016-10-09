var fetch = require('node-fetch');

var Atrium  = function(apiKey, clientID, url = 'https://sand-harvey.moneydesktop.com/api/') {
  this.credentials = {
      clientID,
      apiKey
  };

  this.url = url;
}


Atrium.prototype._fetch = function(endpoint, method, params = null) {
  var body = params ? JSON.stringify(params) : null;

  return (fetch(this.url + endpoint, {
    method,
    body,
    headers: {
      'Accept': 'application/vnd.mx.atrium.v1+json',
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
Atrium.prototype.listMember = function(userGuid) {
  return this._fetch(`users/${userGuid}/members`, 'GET');
};

Atrium.prototype.createMember = function(userGuid, user) {
  return this._fetch(`users/${userGuid}/members`, 'POST', member);
};

Atrium.prototype.readMember = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/members/${guid}`, 'GET');
};

Atrium.prototype.updateMember = function(userGuid, member) {
  return this._fetch(`users/${userGuid}/members/${member.guid}`, 'PUT', { member });
};

Atrium.prototype.deleteMember = function(userGuid, member) {
  return this._fetch(`users/${userGuid}/members/${member.guid}`, 'DELETE');
};

Atrium.prototype.aggregateMember = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/aggregate`, 'GET');
};

Atrium.prototype.resumeMemberAggregation = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/resume`, 'GET');
};

Atrium.prototype.listMemberChallenges = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/challenges`, 'GET');
};

Atrium.prototype.checkMemberStatus = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/members/${guid}/status`, 'GET');
};

//Accounts
Atrium.prototype.listAccounts = function(userGuid) {
  return this._fetch(`users/${userGuid}/accounts`, 'GET');
};

Atrium.prototype.readAccount = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/accounts/${guid}`, 'GET');
};

Atrium.prototype.listAccountTransactions = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/accounts/${guid}/transactions`, 'GET');
};

//Holdings
Atrium.prototype.listHoldings = function(userGuid) {
  return this._fetch(`users/${userGuid}/holdings`, 'GET');
};

Atrium.prototype.readHolding = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/holdings/${guid}`, 'GET');
};

//Transactions
Atrium.prototype.listTransactions = function(userGuid) {
  return this._fetch(`users/${userGuid}/transactions`, 'GET');
};

Atrium.prototype.readTransaction = function(userGuid, guid) {
  return this._fetch(`users/${userGuid}/transactions/${guid}`, 'GET');
};

module.exports = Atrium;
