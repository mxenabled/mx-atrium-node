# .AccountsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAccountTransactions**](AccountsApi.md#listAccountTransactions) | **GET** /users/{user_guid}/accounts/{account_guid}/transactions | List account transactions
[**listUserAccounts**](AccountsApi.md#listUserAccounts) | **GET** /users/{user_guid}/accounts | List accounts for a user
[**readAccount**](AccountsApi.md#readAccount) | **GET** /users/{user_guid}/accounts/{account_guid} | Read an account
[**readAccountByMemberGUID**](AccountsApi.md#readAccountByMemberGUID) | **GET** /users/{user_guid}/members/{member_guid}/accounts/{account_guid} | Read an account


# **listAccountTransactions**
> TransactionsResponseBody listAccountTransactions(accountGuid, userGuid, fromDate, toDate, page, recordsPerPage)

List account transactions

This endpoint allows you to see every transaction that belongs to a specific account. The default from_date is 90 days prior to the request, and the default to_date is 5 days from the time of the request.<br> The from_date and to_date parameters can optionally be appended to the request. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID");

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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountGuid** | **string**| The unique identifier for an &#x60;account&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **fromDate** | **string**| Filter transactions from this date. | [optional] 
 **toDate** | **string**| Filter transactions to this date. | [optional] 
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 

### Return type

[**TransactionsResponseBody**](TransactionsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUserAccounts**
> AccountsResponseBody listUserAccounts(userGuid, page, recordsPerPage)

List accounts for a user

Use this endpoint to view information about every account that belongs to a user. You'll need the user's GUID to access this list. The information will include the account type — e.g., CHECKING, MONEY_MARKET, or PROPERTY — the account balance, the date the account was started, etc.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID");

var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.accounts.listUserAccounts(userGuid, page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 

### Return type

[**AccountsResponseBody**](AccountsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readAccount**
> AccountResponseBody readAccount(accountGuid, userGuid)

Read an account

Reading an account allows you to get information about a specific account that belongs to a user. That includes the account type — e.g., CHECKING, MONEY_MARKET, or PROPERTY — the balance, the date the account was started, and much more.<br> There are two endpoints for reading an account. Both will return the same information.<br> It's important to remember that balance and available_balance will normally be positive numbers — for all account types. But this should be interpreted differently for debt accounts and asset accounts.<br> An asset account, e.g., CHECKING, SAVINGS, or INVESTMENT, will have a positive balance unless it is in an overdraft condition, in which case the balance will be negative.<br> On the other hand, a debt account, e.g., CREDIT CARD, LOAN, MORTGAGE, would have a positivebalance when the user owes money on the account. It would have a negative balance if the account has been overpaid. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID");

var accountGuid = "ACT-123"; // string | The unique identifier for an `account`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.accounts.readAccount(accountGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountGuid** | **string**| The unique identifier for an &#x60;account&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**AccountResponseBody**](AccountResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readAccountByMemberGUID**
> AccountResponseBody readAccountByMemberGUID(accountGuid, memberGuid, userGuid)

Read an account

Reading an account allows you to get information about a specific account that belongs to a user. That includes the account type — e.g., CHECKING, MONEY_MARKET, or PROPERTY — the balance, the date the account was started, and much more.<br> There are two endpoints for reading an account. Both will return the same information.<br> It's important to remember that balance and available_balance will normally be positive numbers — for all account types. But this should be interpreted differently for debt accounts and asset accounts.<br> An asset account, e.g., CHECKING, SAVINGS, or INVESTMENT, will have a positive balance unless it is in an overdraft condition, in which case the balance will be negative.<br> On the other hand, a debt account, e.g., CREDIT CARD, LOAN, MORTGAGE, would have a positivebalance when the user owes money on the account. It would have a negative balance if the account has been overpaid. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID");

var accountGuid = "ACT-123"; // string | The unique identifier for an `account`.
var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.accounts.readAccountByMemberGUID(accountGuid, memberGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountGuid** | **string**| The unique identifier for an &#x60;account&#x60;. | 
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**AccountResponseBody**](AccountResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

