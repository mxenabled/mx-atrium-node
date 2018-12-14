# .MembersApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**aggregateMember**](MembersApi.md#aggregateMember) | **POST** /users/{user_guid}/members/{member_guid}/aggregate | Aggregate member
[**createMember**](MembersApi.md#createMember) | **POST** /users/{user_guid}/members | Create member
[**deleteMember**](MembersApi.md#deleteMember) | **DELETE** /users/{user_guid}/members/{member_guid} | Delete member
[**listMemberAccounts**](MembersApi.md#listMemberAccounts) | **GET** /users/{user_guid}/members/{member_guid}/accounts | List member accounts
[**listMemberCredentials**](MembersApi.md#listMemberCredentials) | **GET** /users/{user_guid}/members/{member_guid}/credentials | List member credentials
[**listMemberMFAChallenges**](MembersApi.md#listMemberMFAChallenges) | **GET** /users/{user_guid}/members/{member_guid}/challenges | List member MFA challenges
[**listMemberTransactions**](MembersApi.md#listMemberTransactions) | **GET** /users/{user_guid}/members/{member_guid}/transactions | List member transactions
[**listMembers**](MembersApi.md#listMembers) | **GET** /users/{user_guid}/members | List members
[**readMember**](MembersApi.md#readMember) | **GET** /users/{user_guid}/members/{member_guid} | Read member
[**readMemberStatus**](MembersApi.md#readMemberStatus) | **GET** /users/{user_guid}/members/{member_guid}/status | Read member connection status
[**resumeMember**](MembersApi.md#resumeMember) | **PUT** /users/{user_guid}/members/{member_guid}/resume | Resume aggregation from MFA
[**updateMember**](MembersApi.md#updateMember) | **PUT** /users/{user_guid}/members/{member_guid} | Update member


# **aggregateMember**
> MemberResponseBody aggregateMember(memberGuid, userGuid)

Aggregate member

Calling this endpoint initiates an aggregation event for the member. This brings in the latest account and transaction data from the connected institution. If this data has recently been updated, MX may not initiate an aggregation event. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.members.aggregateMember(memberGuid, userGuid);

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

# **createMember**
> MemberResponseBody createMember(userGuid, body)

Create member

This endpoint allows you to create a new member. Members are created with the required parameters credentials and institution_code, and the optional parameters identifier and metadata.<br> When creating a member, you'll need to include the correct type of credential required by the financial institution and provided by the user. You can find out which credential type is required with the /institutions/{institution_code}/credentials endpoint.<br> If successful, Atrium will respond with the newly-created member object.<br> Once you successfully create a member, MX will immediately validate the provided credentials and attempt to aggregate data for accounts and transactions. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var body = {json object}; // MemberCreateRequestBody | Member object to be created with optional parameters (identifier and metadata) and required parameters (credentials and institution_code)

var response = client.members.createMember(userGuid, body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **body** | [**MemberCreateRequestBody**](MemberCreateRequestBody.md)| Member object to be created with optional parameters (identifier and metadata) and required parameters (credentials and institution_code) | 

### Return type

[**MemberResponseBody**](MemberResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMember**
> deleteMember(memberGuid, userGuid)

Delete member

Accessing this endpoint will permanently delete a member.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.members.deleteMember(memberGuid, userGuid);

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

void (empty response body)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMemberAccounts**
> AccountsResponseBody listMemberAccounts(memberGuid, userGuid, page, recordsPerPage)

List member accounts

This endpoint returns an array with information about every account associated with a particular member.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.members.listMemberAccounts(memberGuid, userGuid, page, recordsPerPage);

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

[**AccountsResponseBody**](AccountsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMemberCredentials**
> CredentialsResponseBody listMemberCredentials(memberGuid, userGuid)

List member credentials

This endpoint returns an array which contains information on every non-MFA credential associated with a specific member.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.members.listMemberCredentials(memberGuid, userGuid);

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

[**CredentialsResponseBody**](CredentialsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMemberMFAChallenges**
> ChallengesResponseBody listMemberMFAChallenges(memberGuid, userGuid)

List member MFA challenges

Use this endpoint for information on what multi-factor authentication challenges need to be answered in order to aggregate a member.<br> If the aggregation is not challenged, i.e., the member does not have a connection status of CHALLENGED, then code 204 No Content will be returned.<br> If the aggregation has been challenged, i.e., the member does have a connection status of CHALLENGED, then code 200 OK will be returned — along with the corresponding credentials. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.members.listMemberMFAChallenges(memberGuid, userGuid);

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

[**ChallengesResponseBody**](ChallengesResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMemberTransactions**
> TransactionsResponseBody listMemberTransactions(memberGuid, userGuid, fromDate, toDate, page, recordsPerPage)

List member transactions

Use this endpoint to get all transactions from all accounts associated with a specific member.<br> This endpoint accepts optional URL query parameters — from_date and to_date — which are used to filter transactions according to the date they were posted. If no values are given for the query parameters, from_date will default to 90 days prior to the request and to_date will default to 5 days from the time of the request. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var fromDate = "fromDate_example"; // string | Filter transactions from this date. (optional)
var toDate = "toDate_example"; // string | Filter transactions to this date. (optional)
var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.members.listMemberTransactions(memberGuid, userGuid, fromDate, toDate, page, recordsPerPage);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **fromDate** | **string**| Filter transactions from this date. | [optional] 
 **toDate** | **string**| Filter transactions to this date. | [optional] 
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 

### Return type

[**TransactionsResponseBody**](TransactionsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listMembers**
> MembersResponseBody listMembers(userGuid, page, recordsPerPage)

List members

This endpoint returns an array which contains information on every member associated with a specific user.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.members.listMembers(userGuid, page, recordsPerPage);

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

[**MembersResponseBody**](MembersResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readMember**
> MemberResponseBody readMember(memberGuid, userGuid)

Read member

Use this endpoint to read the attributes of a specific member.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.members.readMember(memberGuid, userGuid);

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

# **readMemberStatus**
> MemberConnectionStatusResponseBody readMemberStatus(memberGuid, userGuid)

Read member connection status

This endpoint provides the status of the member's most recent aggregation event. This is an important step in the aggregation process, and the results returned by this endpoint should determine what you do next in order to successfully aggregate a member.<br> MX has introduced new, more detailed information on the current status of a member's connection to a financial institution and the state of its aggregation: the connection_status field. These are intended to replace and expand upon the information provided in the status field, which will soon be deprecated; support for the status field remains for the time being. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.

var response = client.members.readMemberStatus(memberGuid, userGuid);

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

[**MemberConnectionStatusResponseBody**](MemberConnectionStatusResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeMember**
> MemberResponseBody resumeMember(memberGuid, userGuid, body)

Resume aggregation from MFA

This endpoint answers the challenges needed when a member has been challenged by multi-factor authentication.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var body = {json object}; // MemberResumeRequestBody | Member object with MFA challenge answers

var response = client.members.resumeMember(memberGuid, userGuid, body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **body** | [**MemberResumeRequestBody**](MemberResumeRequestBody.md)| Member object with MFA challenge answers | 

### Return type

[**MemberResponseBody**](MemberResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMember**
> MemberResponseBody updateMember(memberGuid, userGuid, body)

Update member

Use this endpoint to update a member's attributes. Only the credentials, identifier, and metadata parameters can be updated. To get a list of the required credentials for the member, use the list member credentials endpoint. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var memberGuid = "memberGuid_example"; // string | The unique identifier for a `member`.
var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var body = {json object}; // MemberUpdateRequestBody | Member object to be updated with optional parameters (credentials, identifier, metadata) (optional)

var response = client.members.updateMember(memberGuid, userGuid, body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **body** | [**MemberUpdateRequestBody**](MemberUpdateRequestBody.md)| Member object to be updated with optional parameters (credentials, identifier, metadata) | [optional] 

### Return type

[**MemberResponseBody**](MemberResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

