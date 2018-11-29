# .TransactionsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**cleanseAndCategorizeTransactions**](TransactionsApi.md#cleanseAndCategorizeTransactions) | **POST** /cleanse_and_categorize | Categorize transactions
[**listUserTransactions**](TransactionsApi.md#listUserTransactions) | **GET** /users/{user_guid}/transactions | List transactions for a user
[**readTransaction**](TransactionsApi.md#readTransaction) | **GET** /users/{user_guid}/transactions/{transaction_guid} | Read a transaction


# **cleanseAndCategorizeTransactions**
> TransactionsCleanseAndCategorize cleanseAndCategorizeTransactions(body)

Categorize transactions

Use this endpoint to categorize, cleanse, and classify transactions. These transactions are not persisted or stored on the MX platform.

### Example
```javascript
var api = require('./api.js');

var client = new api.TransactionsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var body = {json object}; // TransactionsCleanseAndCategorizeRequestBody | User object to be created with optional parameters (amount, type) amd required parameters (description, identifier)

var response = client.cleanseAndCategorizeTransactions(body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TransactionsCleanseAndCategorizeRequestBody**](TransactionsCleanseAndCategorizeRequestBody.md)| User object to be created with optional parameters (amount, type) amd required parameters (description, identifier) | 

### Return type

[**TransactionsCleanseAndCategorize**](TransactionsCleanseAndCategorize.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUserTransactions**
> Transactions listUserTransactions(userGuid, page, fromDate, recordsPerPage, toDate)

List transactions for a user

Use this endpoint to get all transactions that belong to a specific user, across all the user's members and accounts.<br> This endpoint accepts optional query parameters, from_date and to_date, which filter transactions according to the date they were posted. If no values are given, from_date will default to 90 days prior to the request, and to_date will default to 5 days from the time of the request. 

### Example
```javascript
var api = require('./api.js');

var client = new api.TransactionsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var page = 12; // number | Specify current page. (optional)
var fromDate = "fromDate_example"; // string | Filter transactions from this date. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)
var toDate = "toDate_example"; // string | Filter transactions to this date. (optional)

var response = client.listUserTransactions(userGuid, page, fromDate, recordsPerPage, toDate);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **page** | **number**| Specify current page. | [optional] 
 **fromDate** | **string**| Filter transactions from this date. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 
 **toDate** | **string**| Filter transactions to this date. | [optional] 

### Return type

[**Transactions**](Transactions.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readTransaction**
> Transaction readTransaction(transactionGuid, userGuid)

Read a transaction

This endpoint allows you to view information about a specific transaction that belongs to a user.<br>

### Example
```javascript
var api = require('./api.js');

var client = new api.TransactionsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var transactionGuid = "transactionGuid_example"; // string | The unique identifier for a `transaction`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.readTransaction(transactionGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionGuid** | **string**| The unique identifier for a &#x60;transaction&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**Transaction**](Transaction.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

