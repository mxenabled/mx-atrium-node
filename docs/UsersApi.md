# .UsersApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /users | Create user
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{user_guid} | Delete user
[**listUsers**](UsersApi.md#listUsers) | **GET** /users | List users
[**readUser**](UsersApi.md#readUser) | **GET** /users/{user_guid} | Read user
[**updateUser**](UsersApi.md#updateUser) | **PUT** /users/{user_guid} | Update user


# **createUser**
> UserResponseBody createUser(body)

Create user

Call this endpoint to create a new user. Atrium will respond with the newly-created user object if successful. This endpoint accepts several parameters: identifier, metadata, and is_disabled.<br> Disabling a user means that accounts and transactions associated with it will not be updated in the background by MX. It will also restrict access to that user's data until they are no longer disabled. Users who are disabled for the entirety of an Atrium billing period will not be factored into that month's bill. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var body = {json object}; // UserCreateRequestBody | User object to be created with optional parameters (identifier, is_disabled, metadata)

var response = client.users.createUser(body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserCreateRequestBody**](UserCreateRequestBody.md)| User object to be created with optional parameters (identifier, is_disabled, metadata) | 

### Return type

[**UserResponseBody**](UserResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteUser**
> deleteUser(userGuid)

Delete user

Calling this endpoint will permanently delete a user from Atrium. If successful, the API will respond with Status: 204 No Content. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.users.deleteUser(userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

void (empty response body)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listUsers**
> UsersResponseBody listUsers(page, recordsPerPage)

List users

Use this endpoint to list every user you've created in Atrium.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.users.listUsers(page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 

### Return type

[**UsersResponseBody**](UsersResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readUser**
> UserResponseBody readUser(userGuid)

Read user

Use this endpoint to read the attributes of a specific user.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.users.readUser(userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**UserResponseBody**](UserResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUser**
> UserResponseBody updateUser(userGuid, body)

Update user

Use this endpoint to update the attributes of a specific user. Atrium will respond with the updated user object.<br> Disabling a user means that accounts and transactions associated with it will not be updated in the background by MX. It will also restrict access to that user's data until they are no longer disabled. Users who are disabled for the entirety of an Atrium billing period will not be factored into that month's bill.<br> To disable a user, update it and set the is_disabled parameter to true. Set it to false to re-enable the user. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var body = {json object}; // UserUpdateRequestBody | User object to be updated with optional parameters (identifier, is_disabled, metadata) (optional)

var response = client.users.updateUser(userGuid, body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **body** | [**UserUpdateRequestBody**](UserUpdateRequestBody.md)| User object to be updated with optional parameters (identifier, is_disabled, metadata) | [optional] 

### Return type

[**UserResponseBody**](UserResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

