require('es6-promise').polyfill();
require('isomorphic-fetch');

const Atrium = module.exports = {};

Atrium.environments = {
  local: 'http://localhost:3000/api',
  sand: 'https://sand-harvey.moneydesktop.com/api'
};

Atrium.endpoints = [
  //Users
  {
    method: 'post',
    url: '/users',
    clientMethod: 'createUser',
    key: 'user'
  },
  {
    method: 'get',
    url: '/users/:userGuid',
    clientMethod: 'readUser',
    key: 'user'
  },
  {
    method: 'put',
    url: '/users/:userGuid',
    clientMethod: 'updateUser',
    key: 'user'
  },
  {
    method: 'delete',
    url: '/users/:userGuid',
    clientMethod: 'deleteUser',
    key: null
  },
  //Institutions
  {
    method: 'get',
    url: '/institutions',
    clientMethod: 'listInstitutions',
    key: 'institutions'
  },
  //Credentials
  {
    method: 'get',
    url: '/institutions/:institutionCode/credentials',
    clientMethod: 'listCredentials',
    key: 'credentials'
  },
  //Members
  {
    method: 'get',
    url: '/users/:userGuid/members',
    clientMethod: 'listMembers',
    key: 'members'
  },
  {
    method: 'post',
    url: '/users/:userGuid/members',
    clientMethod: 'createMember',
    key: 'member'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid',
    clientMethod: 'readMember',
    key: 'member'
  },
  {
    method: 'put',
    url: '/users/:userGuid/members/:memberGuid',
    clientMethod: 'updateMember',
    key: 'member'
  },
  {
    method: 'delete',
    url: '/users/:userGuid/members/:memberGuid',
    clientMethod: 'deleteMember',
    key: 'member'
  },
  {
    method: 'post',
    url: '/users/:userGuid/members/:memberGuid/aggregate',
    clientMethod: 'aggregateMember',
    key: null
  },
  {
    method: 'put',
    url: '/users/:userGuid/members/:memberGuid/resume',
    clientMethod: 'resumeMemberAggregation',
    key: null
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/challenges',
    clientMethod: 'listMemberChallenges',
    key: 'credentials'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/status',
    clientMethod: 'checkMemberStatus',
    key: 'member'
  },
  {
    method: 'get',
    url: '/users/:userGuid/accounts',
    clientMethod: 'listAccounts',
    key: 'accounts'
  },
  {
    method: 'get',
    url: '/users/:userGuid/accounts/:accountGuid',
    clientMethod: 'readAccount',
    key: 'account'
  },
  {
    method: 'get',
    url: '/users/:userGuid/accounts/:accountGuid/transactions',
    clientMethod: 'listAccountTransactions',
    key: 'transactions'
  },
  //Holdings
  {
    method: 'get',
    url: '/users/:userGuid/holdings',
    clientMethod: 'listHoldings',
    key: 'holdings'
  },
  {
    method: 'get',
    url: '/users/:userGuid/holdings/:holdingGuid',
    clientMethod: 'readHolding',
    key: 'holding'
  },
  //Transactions
  {
    method: 'get',
    url: '/users/:userGuid/transactions',
    clientMethod: 'listTransactions',
    key: 'transactions'
  },
  {
    method: 'get',
    url: '/users/:userGuid/transactions/:transactionGuid',
    clientMethod: 'readTransaction',
    key: 'transaction'
  },

];

Atrium.Client = function(apiKey, clientID, url) {
  if (!clientID) {
    throw new Error('Missing client ID');
  }

  if (!apiKey) {
    throw new Error('Missing API key');
  }

  if (url !== Atrium.environments.sand && url !== Atrium.environments.local) {
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
Atrium.Client.prototype.createUser = function(request) {
  return this._fetchUtility('users', 'POST', request.body);
};

Atrium.Client.prototype.readUser = function(request) {
  return this._fetchUtility('users/' + request.params.userGuid, 'GET');
};

Atrium.Client.prototype.updateUser = function(request) {
  const user = Object.assign({}, request.body.user, { guid: undefined, id: undefined, logged_in_at: undefined });

  return this._fetchUtility('users/' + request.body.user.guid, 'PUT', { user });
};

Atrium.Client.prototype.deleteUser = function(request) {
  return this._fetchUtility('users/' + request.params.userGuid, 'DELETE');
};

//Institutions
Atrium.Client.prototype.listInstitutions = function() {
  return this._fetchUtility('institutions', 'GET');
};

//Credentials
//Fix Institution param
Atrium.Client.prototype.listCredentials = function(request) {
  return this._fetchUtility(`institutions/${request.params.institutionCode}/credentials`, 'GET');
};

//Members
//Fix pagination error
Atrium.Client.prototype.listMembers = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members`, 'GET');
};

Atrium.Client.prototype.createMember = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members`, 'POST', request.body);
};

Atrium.Client.prototype.readMember = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'GET');
};

Atrium.Client.prototype.updateMember = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'PUT', request.body);
};

Atrium.Client.prototype.deleteMember = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'DELETE');
};

Atrium.Client.prototype.aggregateMember = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/aggregate`, 'POST');
};

Atrium.Client.prototype.resumeMemberAggregation = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/resume`, 'PUT', request.body);
};

Atrium.Client.prototype.listMemberChallenges = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/challenges`, 'GET');
};

Atrium.Client.prototype.checkMemberStatus = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/status`, 'GET');
};

//Accounts
Atrium.Client.prototype.listAccounts = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts`, 'GET');
};

Atrium.Client.prototype.readAccount = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts/${request.params.accountGuid}`, 'GET');
};

Atrium.Client.prototype.listAccountTransactions = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts/${request.params.accountGuid}/transactions`, 'GET');
};

//Holdings
Atrium.Client.prototype.listHoldings = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/holdings`, 'GET');
};

Atrium.Client.prototype.readHolding = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/holdings/${request.params.holdingGuid}`, 'GET');
};

//Transactions
Atrium.Client.prototype.listTransactions = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/transactions`, 'GET');
};

Atrium.Client.prototype.readTransaction = function(request) {
  return this._fetchUtility(`users/${request.params.userGuid}/transactions/${request.params.transactionGuid}`, 'GET');
};
