# .StatementsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**downloadStatementPdf**](StatementsApi.md#downloadStatementPdf) | **GET** /users/{user_guid}/members/{member_guid}/statements/{statement_guid}.pdf | Download statement PDF
[**fetchStatements**](StatementsApi.md#fetchStatements) | **POST** /users/{user_guid}/members/{member_guid}/fetch_statements | Fetch statements
[**listMemberStatements**](StatementsApi.md#listMemberStatements) | **GET** /users/{user_guid}/members/{member_guid}/statements | List member statements
[**readMemberStatement**](StatementsApi.md#readMemberStatement) | **GET** /users/{user_guid}/members/{member_guid}/statements/{statement_guid} | Read statement JSON


# **downloadStatementPdf**
> Buffer downloadStatementPdf(memberGuid, userGuid, statementGuid)

Download statement PDF

Use this endpoint to download a specified statement. The endpoint URL is the same as the URI given in each `statement` object. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var statementGuid = "STA-123"; // string | The unique identifier for an `statement`.

var response = client.statements.downloadStatementPdf(memberGuid, userGuid, statementGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **statementGuid** | **string**| The unique identifier for an &#x60;statement&#x60;. | 

### Return type

[**Buffer**](Buffer.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchStatements**
> MemberResponseBody fetchStatements(memberGuid, userGuid)

Fetch statements

The fetch statements endpoint begins fetching statements for a member.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.statements.fetchStatements(memberGuid, userGuid);

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

# **listMemberStatements**
> StatementsResponseBody listMemberStatements(memberGuid, userGuid, page, recordsPerPage)

List member statements

Certain institutions in Atrium allow developers to access account statements associated with a particular `member`. Use this endpoint to get an array of available statements.  Before this endpoint can be used, `fetch_statements` should be performed on the relevant `member`. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.statements.listMemberStatements(memberGuid, userGuid, page, recordsPerPage);

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

[**StatementsResponseBody**](StatementsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readMemberStatement**
> StatementResponseBody readMemberStatement(memberGuid, userGuid, statementGuid)

Read statement JSON

Use this endpoint to download a specified statement. The endpoint URL is the same as the URI given in each `statement` object. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.
var statementGuid = "STA-123"; // string | The unique identifier for an `statement`.

var response = client.statements.readMemberStatement(memberGuid, userGuid, statementGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **statementGuid** | **string**| The unique identifier for an &#x60;statement&#x60;. | 

### Return type

[**StatementResponseBody**](StatementResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

