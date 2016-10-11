const fetch = require('node-fetch');

const Atrium = function(apiKey, clientID, url) {
  this.url = url;
  this.credentials = {
    apiKey,
    clientID
  };
};


Atrium.prototype._fetch = function(endpoint, method, params = null) {
  const body = params ? JSON.stringify(params) : null;

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
      const error = new Error(response.statusText);

      error.response = response;
      throw error;
    }
  })
  .catch(function(error) {
    return error;
  });
};

//Users
Atrium.prototype.listUsers = function() {
  return this._fetch('users', 'GET');
};

Atrium.prototype.createUser = function(user) {
  return this._fetch('users', 'POST', { user });
};

Atrium.prototype.readUser = function(userGuid) {
  return this._fetch('users/' + userGuid, 'GET');
};

//TODO: Fix
Atrium.prototype.updateUser = function(user) {
  return this._fetch('users/' + user.guid, 'PUT', { user });
};

Atrium.prototype.deleteUser = function(userGuid) {
  return this._fetch('users/' + userGuid, 'DELETE');
};

//Institutions
Atrium.prototype.listInstitutions = function() {
  return this._fetch('institutions', 'GET');
};

Atrium.prototype.readInstitution = function(institutionGuid) {
  return this._fetch('institutions/' + institutionGuid, 'GET');
};

//Credentials
Atrium.prototype.listCredentials = function(institutionGuid) {
  return this._fetch(`institutions/${institutionGuid}/credentials`, 'GET');
};

//Members
Atrium.prototype.listMembers = function(userGuid) {
  return this._fetch(`users/${userGuid}/members`, 'GET');
};

Atrium.prototype.createMember = function(userGuid, member) {
  return this._fetch(`users/${userGuid}/members`, 'POST', { member });
};

Atrium.prototype.readMember = function(userGuid, memberGuid) {
  return this._fetch(`users/${userGuid}/members/${memberGuid}`, 'GET');
};

Atrium.prototype.updateMember = function(userGuid, member) {
  return this._fetch(`users/${userGuid}/members/${member.guid}`, 'PUT', { member });
};

Atrium.prototype.deleteMember = function(userGuid, memberGuid) {
  return this._fetch(`users/${userGuid}/members/${memberGuid}`, 'DELETE');
};

Atrium.prototype.aggregateMember = function(userGuid, memberGuid) {
  return this._fetch(`users/${userGuid}/members/${memberGuid}/aggregate`, 'POST');
};

//TODO: Fix
Atrium.prototype.resumeMemberAggregation = function(userGuid, member) {
  return this._fetch(`users/${userGuid}/members/${member.guid}/resume`, 'PUT', { member });
};

Atrium.prototype.listMemberChallenges = function(userGuid, memberGuid) {
  return this._fetch(`users/${userGuid}/members/${memberGuid}/challenges`, 'GET');
};

Atrium.prototype.checkMemberStatus = function(userGuid, memberGuid) {
  return this._fetch(`users/${userGuid}/members/${memberGuid}/status`, 'GET');
};

//Accounts
Atrium.prototype.listAccounts = function(userGuid) {
  return this._fetch(`users/${userGuid}/accounts`, 'GET');
};

Atrium.prototype.readAccount = function(userGuid, accountGuid) {
  return this._fetch(`users/${userGuid}/accounts/${accountGuid}`, 'GET');
};

Atrium.prototype.listAccountTransactions = function(userGuid, accountGuid) {
  return this._fetch(`users/${userGuid}/accounts/${accountGuid}/transactions`, 'GET');
};

//Holdings
Atrium.prototype.listHoldings = function(userGuid) {
  return this._fetch(`users/${userGuid}/holdings`, 'GET');
};

Atrium.prototype.readHolding = function(userGuid, holdingGuid) {
  return this._fetch(`users/${userGuid}/holdings/${holdingGuid}`, 'GET');
};

//Transactions
Atrium.prototype.listTransactions = function(userGuid) {
  return this._fetch(`users/${userGuid}/transactions`, 'GET');
};

Atrium.prototype.readTransaction = function(userGuid, transactionGuid) {
  return this._fetch(`users/${userGuid}/transactions/${transactionGuid}`, 'GET');
};

module.exports = Atrium;
