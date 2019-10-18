# .VerificationApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**listAccountNumbers**](VerificationApi.md#listAccountNumbers) | **GET** /users/{user_guid}/members/{member_guid}/account_numbers | Read account numbers
[**listAccountNumbersByAccount**](VerificationApi.md#listAccountNumbersByAccount) | **GET** /users/{user_guid}/accounts/{account_guid}/account_numbers | Read account numbers by account GUID
[**verifyMember**](VerificationApi.md#verifyMember) | **POST** /users/{user_guid}/members/{member_guid}/verify | Verify


# **listAccountNumbers**
> AccountNumbersResponseBody listAccountNumbers(memberGuid, userGuid)

Read account numbers

Use this endpoint to check whether account and routing numbers are available for accounts associated with a particular member. It returns the account_numbers object, which contains account and routing number data for each account associated with the member.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.verification.listAccountNumbers(memberGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**AccountNumbersResponseBody**](AccountNumbersResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAccountNumbersByAccount**
> AccountNumbersResponseBody listAccountNumbersByAccount(accountGuid, userGuid)

Read account numbers by account GUID

Use this endpoint to check whether account and routing numbers are available for a specific account. It returns the account_numbers object, which contains account and routing number data.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var accountGuid = "ACT-123"; // string | The unique identifier for an `account`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.verification.listAccountNumbersByAccount(accountGuid, userGuid);

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

[**AccountNumbersResponseBody**](AccountNumbersResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyMember**
> MemberResponseBody verifyMember(memberGuid, userGuid)

Verify

The verify endpoint begins a verification process for a member.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.verification.verifyMember(memberGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**MemberResponseBody**](MemberResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

