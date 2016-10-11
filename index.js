require('es6-promise').polyfill();
require('isomorphic-fetch');

const Atrium = module.exports = {};

Atrium.environments = {
  sand: 'https://sand-harvey.moneydesktop.com/api'
};

Atrium.Client = function(apiKey, clientID, url) {
  if (!clientID) {
    throw new Error('Missing client ID');
  }

  if (!apiKey) {
    throw new Error('Missing API key');
  }

  if (url !== Atrium.environments.sand) {
    throw new Error('Invalid environment');
  }

  this.url = url;
  this.clientID = clientID;
  this.apiKey = apiKey;
};

//Fetch utility
Atrium.Client.prototype._fetchUtility = function(endpoint, method, params = null) {
  const body = params ? JSON.stringify(params) : null;

  return (fetch(this.url + '/' + endpoint, {
    method,
    body,
    headers: {
      'Accept': 'application/vnd.mx.atrium.v1+json',
      'Content-Type': 'application/json',
      'MX-API-KEY': this.apiKey,
      'MX-CLIENT-ID': this.clientID
    }
  }))
  .then(response => {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      const error = new Error(response.statusText);

      error.response = response;
      throw error;
    }
  })
  .catch(error => {
    return error;
  });
};

//Users
Atrium.Client.prototype.createUser = function(user) {
  return this._fetchUtility('users', 'POST', { user });
};

Atrium.Client.prototype.readUser = function(userGuid) {
  return this._fetchUtility('users/' + userGuid, 'GET');
};

Atrium.Client.prototype.updateUser = function(updatedUser) {
  const user = Object.assign({}, updatedUser, { guid: undefined });

  return this._fetchUtility('users/' + updatedUser.guid, 'PUT', { user });
};

Atrium.Client.prototype.deleteUser = function(userGuid) {
  return this._fetchUtility('users/' + userGuid, 'DELETE');
};

//Institutions
Atrium.Client.prototype.listInstitutions = function() {
  return this._fetchUtility('institutions', 'GET');
};

Atrium.Client.prototype.readInstitution = function(institutionGuid) {
  return this._fetchUtility('institutions/' + institutionGuid, 'GET');
};

//Credentials
Atrium.Client.prototype.listCredentials = function(institutionGuid) {
  return this._fetchUtility(`institutions/${institutionGuid}/credentials`, 'GET');
};

//Members
Atrium.Client.prototype.listMembers = function(userGuid) {
  return this._fetchUtility(`users/${userGuid}/members`, 'GET');
};

Atrium.Client.prototype.createMember = function(userGuid, member) {
  return this._fetchUtility(`users/${userGuid}/members`, 'POST', { member });
};

Atrium.Client.prototype.readMember = function(userGuid, memberGuid) {
  return this._fetchUtility(`users/${userGuid}/members/${memberGuid}`, 'GET');
};

Atrium.Client.prototype.updateMember = function(userGuid, member) {
  return this._fetchUtility(`users/${userGuid}/members/${member.guid}`, 'PUT', { member });
};

Atrium.Client.prototype.deleteMember = function(userGuid, memberGuid) {
  return this._fetchUtility(`users/${userGuid}/members/${memberGuid}`, 'DELETE');
};

Atrium.Client.prototype.aggregateMember = function(userGuid, memberGuid) {
  return this._fetchUtility(`users/${userGuid}/members/${memberGuid}/aggregate`, 'POST');
};

Atrium.Client.prototype.resumeMemberAggregation = function(userGuid, member) {
  return this._fetchUtility(`users/${userGuid}/members/${member.guid}/resume`, 'PUT', { member });
};

Atrium.Client.prototype.listMemberChallenges = function(userGuid, memberGuid) {
  return this._fetchUtility(`users/${userGuid}/members/${memberGuid}/challenges`, 'GET');
};

Atrium.Client.prototype.checkMemberStatus = function(userGuid, memberGuid) {
  return this._fetchUtility(`users/${userGuid}/members/${memberGuid}/status`, 'GET');
};

//Accounts
Atrium.Client.prototype.listAccounts = function(userGuid) {
  return this._fetchUtility(`users/${userGuid}/accounts`, 'GET');
};

Atrium.Client.prototype.readAccount = function(userGuid, accountGuid) {
  return this._fetchUtility(`users/${userGuid}/accounts/${accountGuid}`, 'GET');
};

Atrium.Client.prototype.listAccountTransactions = function(userGuid, accountGuid) {
  return this._fetchUtility(`users/${userGuid}/accounts/${accountGuid}/transactions`, 'GET');
};

//Holdings
Atrium.Client.prototype.listHoldings = function(userGuid) {
  return this._fetchUtility(`users/${userGuid}/holdings`, 'GET');
};

Atrium.Client.prototype.readHolding = function(userGuid, holdingGuid) {
  return this._fetchUtility(`users/${userGuid}/holdings/${holdingGuid}`, 'GET');
};

//Transactions
Atrium.Client.prototype.listTransactions = function(userGuid) {
  return this._fetchUtility(`users/${userGuid}/transactions`, 'GET');
};

Atrium.Client.prototype.readTransaction = function(userGuid, transactionGuid) {
  return this._fetchUtility(`users/${userGuid}/transactions/${transactionGuid}`, 'GET');
};
