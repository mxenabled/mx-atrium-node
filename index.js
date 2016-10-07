/**
 * <b>Atrium API Client</b>.
 * @constructor
 * @param {string}    clientID        Your account's MX Client Id
 * @param {string}    apiKey          Your account's MX API Key
 * @author Jason Olson <jason.olson@mx.com> (www.matejsimek.cz)
 */

var Atrium  = function(clientID, apiKey) {
  this.credentials = {
      clientID,
      apiKey
  };
}

var BASE_URL = 'https://qa-atrium.moneydesktop.com/api/users';

Atrium.prototype._get = function(endpoint, parameters, callback) {
  this.fetch.get({
    url: BASE_URL + '/' + endpoint + '?' + JSON.stringify(Object.assign({}, parameters, this.credentials))
  })
};

module.exports = Atrium;
