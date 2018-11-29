# .AccountsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAccountTransactions**](AccountsApi.md#listAccountTransactions) | **GET** /users/{user_guid}/accounts/{account_guid}/transactions | List account transactions
[**listUserAccounts**](AccountsApi.md#listUserAccounts) | **GET** /users/{user_guid}/accounts | List accounts for a user
[**readAccount**](AccountsApi.md#readAccount) | **GET** /users/{user_guid}/accounts/{account_guid} | Read an account
[**readAccountByMemberGUID**](AccountsApi.md#readAccountByMemberGUID) | **GET** /users/{user_guid}/members/{member_guid}/accounts/{account_guid} | Read an account


# **listAccountTransactions**
> Transactions listAccountTransactions(accountGuid, userGuid, fromDate, toDate, page, recordsPerPage)

List account transactions

This endpoint allows you to see every transaction that belongs to a specific account. The default from_date is 90 days prior to the request, and the default to_date is 5 days from the time of the request.<br> The from_date and to_date parameters can optionally be appended to the request. 

### Example
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

[**Transactions**](Transactions.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUserAccounts**
> Accounts listUserAccounts(userGuid, page, recordsPerPage)

List accounts for a user

Use this endpoint to view information about every account that belongs to a user. You'll need the user's GUID to access this list. The information will include the account type — e.g., CHECKING, MONEY_MARKET, or PROPERTY — the account balance, the date the account was started, etc.

### Example
```javascript
var api = require('./api.js');

var client = new api.AccountsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.listUserAccounts(userGuid, page, recordsPerPage);

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

[**Accounts**](Accounts.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readAccount**
> Account readAccount(accountGuid, userGuid)

Read an account

Reading an account allows you to get information about a specific account that belongs to a user. That includes the account type — e.g., CHECKING, MONEY_MARKET, or PROPERTY — the balance, the date the account was started, and much more.<br> There are two endpoints for reading an account. Both will return the same information.<br> It's important to remember that balance and available_balance will normally be positive numbers — for all account types. But this should be interpreted differently for debt accounts and asset accounts.<br> An asset account, e.g., CHECKING, SAVINGS, or INVESTMENT, will have a positive balance unless it is in an overdraft condition, in which case the balance will be negative.<br> On the other hand, a debt account, e.g., CREDIT CARD, LOAN, MORTGAGE, would have a positivebalance when the user owes money on the account. It would have a negative balance if the account has been overpaid. 

### Example
```javascript
var api = require('./api.js');

var client = new api.AccountsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var accountGuid = "accountGuid_example"; // string | The unique identifier for an `account`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.readAccount(accountGuid, userGuid);

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

[**Account**](Account.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readAccountByMemberGUID**
> Account readAccountByMemberGUID(accountGuid, memberGuid, userGuid)

Read an account

Reading an account allows you to get information about a specific account that belongs to a user. That includes the account type — e.g., CHECKING, MONEY_MARKET, or PROPERTY — the balance, the date the account was started, and much more.<br> There are two endpoints for reading an account. Both will return the same information.<br> It's important to remember that balance and available_balance will normally be positive numbers — for all account types. But this should be interpreted differently for debt accounts and asset accounts.<br> An asset account, e.g., CHECKING, SAVINGS, or INVESTMENT, will have a positive balance unless it is in an overdraft condition, in which case the balance will be negative.<br> On the other hand, a debt account, e.g., CREDIT CARD, LOAN, MORTGAGE, would have a positivebalance when the user owes money on the account. It would have a negative balance if the account has been overpaid. 

### Example
```javascript
var api = require('./api.js');

var client = new api.AccountsApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var accountGuid = "accountGuid_example"; // string | The unique identifier for an `account`.
var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.readAccountByMemberGUID(accountGuid, memberGuid, userGuid);

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

[**Account**](Account.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

