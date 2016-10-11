require('es6-promise').polyfill();
require('isomorphic-fetch');

const Atrium = function(apiKey, clientID, url) {
  this.url = url;
  this.credentials = {
    apiKey,
    clientID
  };

  // Fetch utility
  this._fetchUtility = function(endpoint, method, params = null) {
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
  this.createUser = user => {
    return this._fetchUtility('users', 'POST', { user });
  };

  this.readUser = userGuid => {
    return this._fetchUtility('users/' + userGuid, 'GET');
  };

  this.updateUser = updatedUser => {
    const user = Object.assign({}, updatedUser, { guid: undefined });

    return this._fetchUtility('users/' + updatedUser.guid, 'PUT', { user });
  };

  this.deleteUser = userGuid => {
    return this._fetchUtility('users/' + userGuid, 'DELETE');
  };

  //Institutions
  this.listInstitutions = function() {
    return this._fetchUtility('institutions', 'GET');
  };

  this.readInstitution = function(institutionGuid) {
    return this._fetchUtility('institutions/' + institutionGuid, 'GET');
  };

  //Credentials
  this.listCredentials = function(institutionGuid) {
    return this._fetchUtility(`institutions/${institutionGuid}/credentials`, 'GET');
  };

  //Members
  this.listMembers = function(userGuid) {
    return this._fetchUtility(`users/${userGuid}/members`, 'GET');
  };

  this.createMember = function(userGuid, member) {
    return this._fetchUtility(`users/${userGuid}/members`, 'POST', { member });
  };

  this.readMember = function(userGuid, memberGuid) {
    return this._fetchUtility(`users/${userGuid}/members/${memberGuid}`, 'GET');
  };

  this.updateMember = function(userGuid, member) {
    return this._fetchUtility(`users/${userGuid}/members/${member.guid}`, 'PUT', { member });
  };

  this.deleteMember = function(userGuid, memberGuid) {
    return this._fetchUtility(`users/${userGuid}/members/${memberGuid}`, 'DELETE');
  };

  this.aggregateMember = function(userGuid, memberGuid) {
    return this._fetchUtility(`users/${userGuid}/members/${memberGuid}/aggregate`, 'POST');
  };

  this.resumeMemberAggregation = function(userGuid, member) {
    return this._fetchUtility(`users/${userGuid}/members/${member.guid}/resume`, 'PUT', { member });
  };

  this.listMemberChallenges = function(userGuid, memberGuid) {
    return this._fetchUtility(`users/${userGuid}/members/${memberGuid}/challenges`, 'GET');
  };

  this.checkMemberStatus = function(userGuid, memberGuid) {
    return this._fetchUtility(`users/${userGuid}/members/${memberGuid}/status`, 'GET');
  };

  //Accounts
  this.listAccounts = function(userGuid) {
    return this._fetchUtility(`users/${userGuid}/accounts`, 'GET');
  };

  this.readAccount = function(userGuid, accountGuid) {
    return this._fetchUtility(`users/${userGuid}/accounts/${accountGuid}`, 'GET');
  };

  this.listAccountTransactions = function(userGuid, accountGuid) {
    return this._fetchUtility(`users/${userGuid}/accounts/${accountGuid}/transactions`, 'GET');
  };

  //Holdings
  this.listHoldings = function(userGuid) {
    return this._fetchUtility(`users/${userGuid}/holdings`, 'GET');
  };

  this.readHolding = function(userGuid, holdingGuid) {
    return this._fetchUtility(`users/${userGuid}/holdings/${holdingGuid}`, 'GET');
  };

  //Transactions
  this.listTransactions = function(userGuid) {
    return this._fetchUtility(`users/${userGuid}/transactions`, 'GET');
  };

  this.readTransaction = function(userGuid, transactionGuid) {
    return this._fetchUtility(`users/${userGuid}/transactions/${transactionGuid}`, 'GET');
  };
};

module.exports = Atrium;
