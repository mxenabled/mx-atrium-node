require('es6-promise').polyfill();
require('isomorphic-fetch');

const Atrium = module.exports = {};

Atrium.environments = {
  local: 'http://localhost:3000',
  development: 'https://vestibule.mx.com/',
  production: 'https://atrium.mx.com/'
};

Atrium.endpoints = [
  //MX Connect
  {
    method: 'post',
    url: '/users/:userGuid/connect_widget_url',
    clientMethod: 'getConnectWidgetUrl'
  },
  //Users
  {
    method: 'post',
    url: '/users',
    clientMethod: 'createUser'
  },
  {
    method: 'get',
    url: '/users/:userGuid',
    clientMethod: 'readUser'
  },
  {
    method: 'put',
    url: '/users/:userGuid',
    clientMethod: 'updateUser'
  },
  {
    method: 'delete',
    url: '/users/:userGuid',
    clientMethod: 'deleteUser'
  },
  //Institutions
  {
    method: 'get',
    url: '/institutions',
    clientMethod: 'listInstitutions'
  },
  //Credentials
  {
    method: 'get',
    url: '/institutions/:institutionCode/credentials',
    clientMethod: 'listCredentials'
  },
  //Members
  {
    method: 'get',
    url: '/users/:userGuid/members',
    clientMethod: 'listMembers'
  },
  {
    method: 'post',
    url: '/users/:userGuid/members',
    clientMethod: 'createMember'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid',
    clientMethod: 'readMember'
  },
  {
    method: 'put',
    url: '/users/:userGuid/members/:memberGuid',
    clientMethod: 'updateMember'
  },
  {
    method: 'delete',
    url: '/users/:userGuid/members/:memberGuid',
    clientMethod: 'deleteMember'
  },
  {
    method: 'post',
    url: '/users/:userGuid/members/:memberGuid/aggregate',
    clientMethod: 'aggregateMember'
  },
  {
    method: 'put',
    url: '/users/:userGuid/members/:memberGuid/resume',
    clientMethod: 'resumeMemberAggregation'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/challenges',
    clientMethod: 'listMemberChallenges'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/status',
    clientMethod: 'checkMemberStatus'
  },
  {
    method: 'get',
    url: '/users/:userGuid/accounts',
    clientMethod: 'listAccounts'
  },
  {
    method: 'get',
    url: '/users/:userGuid/accounts/:accountGuid',
    clientMethod: 'readAccount'
  },
  {
    method: 'get',
    url: '/users/:userGuid/accounts/:accountGuid/transactions',
    clientMethod: 'listAccountTransactions'
  },
  //Holdings
  {
    method: 'get',
    url: '/users/:userGuid/holdings',
    clientMethod: 'listHoldings'
  },
  {
    method: 'get',
    url: '/users/:userGuid/holdings/:holdingGuid',
    clientMethod: 'readHolding'
  },
  //Transactions
  {
    method: 'get',
    url: '/users/:userGuid/transactions',
    clientMethod: 'listTransactions'
  },
  {
    method: 'get',
    url: '/users/:userGuid/transactions/:transactionGuid',
    clientMethod: 'readTransaction'
  }
];

Atrium.Client = function (apiKey, clientID, url) {
  if (!clientID) {
    throw new Error('Missing client ID');
  }

  if (!apiKey) {
    throw new Error('Missing API key');
  }

  if (url !== Atrium.environments.production && url !== Atrium.environments.development && url !== Atrium.environments.local) {
    throw new Error('Invalid environment');
  }

  this.url = url;
  this.clientID = clientID;
  this.apiKey = apiKey;
};

//Fetch utility
Atrium.Client.prototype._fetchUtility = function (endpoint, method, params = null) {
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
    if (response.ok) {
      return response.json();
    } else {
      return response;
    }
  });
};

//MX Connect
Atrium.Client.prototype.getConnectWidgetUrl = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/connect_widget_url`, 'POST');
};

//Users
Atrium.Client.prototype.createUser = function (request) {
  return this._fetchUtility('users', 'POST', request.body);
};

Atrium.Client.prototype.readUser = function (request) {
  return this._fetchUtility('users/' + request.params.userGuid, 'GET');
};

Atrium.Client.prototype.updateUser = function (request) {
  const user = Object.assign({}, request.body.user);

  delete user.guid;
  delete user.id;
  delete user.logged_in_at;

  return this._fetchUtility('users/' + request.body.user.guid, 'PUT', { user });
};

Atrium.Client.prototype.deleteUser = function (request) {
  return this._fetchUtility('users/' + request.params.userGuid, 'DELETE');
};

//Institutions
Atrium.Client.prototype.listInstitutions = function () {
  return this._fetchUtility('institutions', 'GET');
};

//Credentials
//Fix Institution param
Atrium.Client.prototype.listCredentials = function (request) {
  return this._fetchUtility(`institutions/${request.params.institutionCode}/credentials`, 'GET');
};

//Members
//Fix pagination error
Atrium.Client.prototype.listMembers = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members`, 'GET');
};

Atrium.Client.prototype.createMember = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members`, 'POST', request.body);
};

Atrium.Client.prototype.readMember = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'GET');
};

Atrium.Client.prototype.updateMember = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'PUT', request.body);
};

Atrium.Client.prototype.deleteMember = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'DELETE');
};

Atrium.Client.prototype.aggregateMember = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/aggregate`, 'POST');
};

Atrium.Client.prototype.resumeMemberAggregation = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/resume`, 'PUT', request.body);
};

Atrium.Client.prototype.listMemberChallenges = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/challenges`, 'GET');
};

Atrium.Client.prototype.checkMemberStatus = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/status`, 'GET');
};

//Accounts
Atrium.Client.prototype.listAccounts = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts`, 'GET');
};

Atrium.Client.prototype.readAccount = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts/${request.params.accountGuid}`, 'GET');
};

Atrium.Client.prototype.listAccountTransactions = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts/${request.params.accountGuid}/transactions`, 'GET');
};

//Holdings
Atrium.Client.prototype.listHoldings = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/holdings`, 'GET');
};

Atrium.Client.prototype.readHolding = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/holdings/${request.params.holdingGuid}`, 'GET');
};

//Transactions
Atrium.Client.prototype.listTransactions = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/transactions`, 'GET');
};

Atrium.Client.prototype.readTransaction = function (request) {
  return this._fetchUtility(`users/${request.params.userGuid}/transactions/${request.params.transactionGuid}`, 'GET');
};
