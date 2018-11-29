# .IdentityApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**identifyMember**](IdentityApi.md#identifyMember) | **POST** /users/{user_guid}/members/{member_guid}/identify | Identify
[**listAccountOwners**](IdentityApi.md#listAccountOwners) | **GET** /users/{user_guid}/members/{member_guid}/account_owners | List member account owners


# **identifyMember**
> Member identifyMember(memberGuid, userGuid)

Identify

The identify endpoint begins an identification process for an already-existing member.

### Example
```javascript
var api = require('./api.js');

var client = new api.IdentityApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.identifyMember(memberGuid, userGuid);

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

[**Member**](Member.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listAccountOwners**
> AccountOwners listAccountOwners(memberGuid, userGuid)

List member account owners

This endpoint returns an array with information about every account associated with a particular member.

### Example
```javascript
var api = require('./api.js');

var client = new api.IdentityApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.listAccountOwners(memberGuid, userGuid);

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

[**AccountOwners**](AccountOwners.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

