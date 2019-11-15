# MX API
The MX Atrium API supports over 48,000 data connections to thousands of financial institutions. It provides secure access to your users' accounts and transactions with industry-leading cleansing, categorization, and classification.  Atrium is designed according to resource-oriented REST architecture and responds with JSON bodies and HTTP response codes.  Use Atrium's development environment, vestibule.mx.com, to quickly get up and running. The development environment limits are 100 users, 25 members per user, and access to the top 15 institutions. Contact MX to purchase production access. 

## Installation & Usage

### Install dependencies
```sh
npm install mx-atrium
```

## Example Usage

Please see `docs` directory for additional endpoint examples

```javascript
var atrium = require('mx-atrium');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var accountGuid = "ACT-123"; // string | The unique identifier for an `account`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var fromDate = "2016-09-20"; // string | Filter transactions from this date. (optional)
var toDate = "2016-10-20"; // string | Filter transactions to this date. (optional)
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.accounts.listAccountTransactions(accountGuid, userGuid, fromDate, toDate, page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```

## Development

### Install dependencies
```sh
npm install
```

### Generate JavaScript file
```sh
npm run build
```

This will generate `atrium.js` and `atrium.d.ts`
