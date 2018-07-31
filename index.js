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
    method: 'get',
    url: '/users',
    clientMethod: 'listUsers'
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
  {
    method: 'get',
    url: '/institutions/:institutionCode',
    clientMethod: 'readInstitution'
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
    method: 'get',
    url: '/users/:userGuid/members',
    clientMethod: 'listMembers'
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
    url: '/users/:userGuid/members/:memberGuid/credentials',
    clientMethod: 'listMemberCredentials'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/accounts',
    clientMethod: 'listMemberAccounts'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/transactions',
    clientMethod: 'listMemberTransactions'
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
  {
    method: 'post',
    url: '/users/:userGuid/members/:memberGuid/verify',
    clientMethod: 'verifyMember'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:accountOrMemberGuid/account_numbers',
    clientMethod: 'listAccountNumbers'
  },
  {
    method: 'post',
    url: '/users/:userGuid/members/:memberGuid/identify',
    clientMethod: 'identifyMember'
  },
  {
    method: 'get',
    url: '/users/:userGuid/members/:memberGuid/account_owners',
    clientMethod: 'listAccountOwners'
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
    if (response.ok && response.status != 204) {
      return response.json();
    } else {
      return response;
    }
  });
};

//Parameters utility
Atrium.Client.prototype.optionalParameters = function (request) {
  var params = "?";
  if ("params" in request) {
    var passedParams = request.params;
    if ("name" in passedParams && request.params.name != null) {
      params += "name=" + request.params.name + "&";
    }
    if ("from_date" in passedParams && request.params.from_date != null) {
      params += "from_date=" + request.params.from_date + "&";
    }
    if ("to_date" in passedParams && request.params.to_date != null) {
      params += "to_date=" + request.params.to_date + "&";
    }
    if ("page" in passedParams && request.params.page != null) {
      params += "page=" + request.params.page + "&";
    }
    if ("records_per_page" in passedParams && request.params.records_per_page != null) {
      params += "records_per_page=" + request.params.records_per_page + "&";
    }
  }
  params = params.slice(0, -1);

  return params;
};

//Users
Atrium.Client.prototype.createUser = function (request = {}) {
  return this._fetchUtility('users', 'POST', request.body);
};

Atrium.Client.prototype.readUser = function (request = {}) {
  return this._fetchUtility('users/' + request.params.userGuid, 'GET');
};

Atrium.Client.prototype.updateUser = function (request = {}) {
  const user = Object.assign({}, request.body.user);

  delete user.guid;
  delete user.id;
  delete user.logged_in_at;

  return this._fetchUtility('users/' + request.body.user.guid, 'PUT', { user });
};

Atrium.Client.prototype.listUsers = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility('users' + params, 'GET');
};

Atrium.Client.prototype.deleteUser = function (request = {}) {
  return this._fetchUtility('users/' + request.params.userGuid, 'DELETE');
};

//Institutions
Atrium.Client.prototype.listInstitutions = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility('institutions' + params, 'GET');
};

Atrium.Client.prototype.readInstitution = function (request = {}) {
  return this._fetchUtility('institutions/' + request.params.institutionCode, 'GET');
};

Atrium.Client.prototype.listCredentials = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`institutions/${request.params.institutionCode}/credentials` + params, 'GET');
};

//Members
Atrium.Client.prototype.createMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members`, 'POST', request.body);
};

Atrium.Client.prototype.readMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'GET');
};

Atrium.Client.prototype.updateMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'PUT', request.body);
};

Atrium.Client.prototype.deleteMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}`, 'DELETE');
};

Atrium.Client.prototype.listMembers = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/members` + params, 'GET');
};

Atrium.Client.prototype.aggregateMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/aggregate`, 'POST');
};

Atrium.Client.prototype.checkMemberStatus = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/status`, 'GET');
};

Atrium.Client.prototype.listMemberChallenges = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/challenges` + params, 'GET');
};

Atrium.Client.prototype.resumeMemberAggregation = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/resume`, 'PUT', request.body);
};

Atrium.Client.prototype.listMemberCredentials = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/credentials` + params, 'GET');
};

Atrium.Client.prototype.listMemberAccounts = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/accounts` + params, 'GET');
};

Atrium.Client.prototype.listMemberTransactions = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/transactions` + params, 'GET');
};

Atrium.Client.prototype.verifyMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/verify`, 'POST');
};

Atrium.Client.prototype.listAccountNumbers = function (request = {}) {
  if (request.params.accountOrMemberGuid.substring(0,3) == "ACT") {
    var endpoint = `users/${request.params.userGuid}/accounts/${request.params.accountOrMemberGuid}/account_numbers`
  } else {
    var endpoint = `users/${request.params.userGuid}/members/${request.params.accountOrMemberGuid}/account_numbers`
  }

  return this._fetchUtility(endpoint, 'GET');
};

Atrium.Client.prototype.identifyMember = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/identify`, 'POST');
};

Atrium.Client.prototype.listAccountOwners = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/members/${request.params.memberGuid}/account_owners`, 'GET');
};

//Accounts
Atrium.Client.prototype.readAccount = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/accounts/${request.params.accountGuid}`, 'GET');
};

Atrium.Client.prototype.listAccounts = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/accounts` + params, 'GET');
};

Atrium.Client.prototype.listAccountTransactions = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/accounts/${request.params.accountGuid}/transactions` + params, 'GET');
};

//Transactions
Atrium.Client.prototype.readTransaction = function (request = {}) {
  return this._fetchUtility(`users/${request.params.userGuid}/transactions/${request.params.transactionGuid}`, 'GET');
};

Atrium.Client.prototype.listTransactions = function (request = {}) {
  var params = this.optionalParameters(request);

  return this._fetchUtility(`users/${request.params.userGuid}/transactions` + params, 'GET');
};

//MX Connect
Atrium.Client.prototype.getConnectWidgetUrl = function (request) {
  var params = null;
  if (request.params.hasOwnProperty("options")) {
    params = request.params.options;
  }
  return this._fetchUtility(`users/${request.params.userGuid}/connect_widget_url`, 'POST', params);
};
