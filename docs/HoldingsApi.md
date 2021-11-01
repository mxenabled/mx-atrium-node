# .HoldingsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**listHoldings**](HoldingsApi.md#listHoldings) | **GET** /users/{user_guid}/holdings | List holdings
[**listHoldingsByAccount**](HoldingsApi.md#listHoldingsByAccount) | **GET** /users/{user_guid}/accounts/{account_guid}/holdings | List holdings by account
[**listHoldingsByMember**](HoldingsApi.md#listHoldingsByMember) | **GET** /users/{user_guid}/members/{member_guid}/holdings | List holdings by member
[**readHolding**](HoldingsApi.md#readHolding) | **GET** /users/{user_guid}/holdings/{holding_guid} | Read holding


# **listHoldings**
> HoldingsResponseBody listHoldings(userGuid, page, recordsPerPage)

List holdings

Use this endpoint to read all holdings associated with a specific user.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.holdings.listHoldings(userGuid, page, recordsPerPage);

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

[**HoldingsResponseBody**](HoldingsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHoldingsByAccount**
> HoldingsResponseBody listHoldingsByAccount(accountGuid, userGuid, page, recordsPerPage)

List holdings by account

Use this endpoint to read all holdings associated with a specific account.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var accountGuid = "ACT-123"; // string | The unique identifier for an `account`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.holdings.listHoldingsByAccount(accountGuid, userGuid, page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountGuid** | **string**| The unique identifier for an &#x60;account&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 

### Return type

[**HoldingsResponseBody**](HoldingsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listHoldingsByMember**
> HoldingsResponseBody listHoldingsByMember(memberGuid, userGuid, page, recordsPerPage)

List holdings by member

Use this endpoint to read all holdings associated with a specific member.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.holdings.listHoldingsByMember(memberGuid, userGuid, page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 

### Return type

[**HoldingsResponseBody**](HoldingsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readHolding**
> HoldingResponseBody readHolding(holdingGuid, userGuid)

Read holding

Use this endpoint to read the attributes of a specific holding.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var holdingGuid = "HOL-123"; // string | The unique identifier for a `holding`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.holdings.readHolding(holdingGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **holdingGuid** | **string**| The unique identifier for a &#x60;holding&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**HoldingResponseBody**](HoldingResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

