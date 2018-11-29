# MX API
The MX Atrium API supports over 48,000 data connections to thousands of financial institutions. It provides secure access to your users' accounts and transactions with industry-leading cleansing, categorization, and classification.  Atrium is designed according to resource-oriented REST architecture and responds with JSON bodies and HTTP response codes.  Use Atrium's development environment, vestibule.mx.com, to quickly get up and running. The development environment limits are 100 users, 25 members per user, and access to the top 15 institutions. Contact MX to purchase production access. 

## Installation & Usage

### Install Required npm Packages
```sh
npm install request --save
npm install bluebird --save
npm install @types/node --save
```

### Generate JavaScript file
```sh
tsc --target es5 api.ts
```

## Example Usage

Please see `docs` directory for additional endpoint examples

```javascript
var api = require('./api.js');

var client = new api.AccountsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var accountGuid = "accountGuid_example"; // string | The unique identifier for an `account`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var fromDate = "fromDate_example"; // string | Filter transactions from this date. (optional)
var toDate = "toDate_example"; // string | Filter transactions to this date. (optional)
var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.listAccountTransactions(accountGuid, userGuid, fromDate, toDate, page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```
