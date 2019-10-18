# .InstitutionsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**listInstitutions**](InstitutionsApi.md#listInstitutions) | **GET** /institutions | List institutions
[**readInstitution**](InstitutionsApi.md#readInstitution) | **GET** /institutions/{institution_code} | Read institution
[**readInstitutionCredentials**](InstitutionsApi.md#readInstitutionCredentials) | **GET** /institutions/{institution_code}/credentials | Read institution credentials


# **listInstitutions**
> InstitutionsResponseBody listInstitutions(name, page, recordsPerPage, supportsAccountIdentification, supportsAccountStatement, supportsAccountVerification, supportsTransactionHistory)

List institutions

This endpoint allows you to see what institutions are available for connection. Information returned will include the institution_code assigned to a particular institution, URLs for the financial institution's logo, and the URL for its website.<br> This endpoint takes an optional query string, name={string}. This will list only institutions in which the appended string appears. 

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var name = name_example; // string | This will list only institutions in which the appended string appears. (optional)
var page = 1; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)
var supportsAccountIdentification = true; // boolean | Filter only institutions which support account identification. (optional)
var supportsAccountStatement = true; // boolean | Filter only institutions which support account statements. (optional)
var supportsAccountVerification = true; // boolean | Filter only institutions which support account verification. (optional)
var supportsTransactionHistory = true; // boolean | Filter only institutions which support extended transaction history. (optional)

var response = client.institutions.listInstitutions(name, page, recordsPerPage, supportsAccountIdentification, supportsAccountStatement, supportsAccountVerification, supportsTransactionHistory);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **string**| This will list only institutions in which the appended string appears. | [optional] 
 **page** | **number**| Specify current page. | [optional] 
 **recordsPerPage** | **number**| Specify records per page. | [optional] 
 **supportsAccountIdentification** | **boolean**| Filter only institutions which support account identification. | [optional] 
 **supportsAccountStatement** | **boolean**| Filter only institutions which support account statements. | [optional] 
 **supportsAccountVerification** | **boolean**| Filter only institutions which support account verification. | [optional] 
 **supportsTransactionHistory** | **boolean**| Filter only institutions which support extended transaction history. | [optional] 

### Return type

[**InstitutionsResponseBody**](InstitutionsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readInstitution**
> InstitutionResponseBody readInstitution(institutionCode)

Read institution

This endpoint allows you to see information for a specific institution.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var institutionCode = "example_institution_code"; // string | The institution_code of the institution.

var response = client.institutions.readInstitution(institutionCode);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionCode** | **string**| The institution_code of the institution. | 

### Return type

[**InstitutionResponseBody**](InstitutionResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readInstitutionCredentials**
> CredentialsResponseBody readInstitutionCredentials(institutionCode)

Read institution credentials

Use this endpoint to see which credentials will be needed to create a member for a specific institution.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var institutionCode = "example_institution_code"; // string | The institution_code of the institution.

var response = client.institutions.readInstitutionCredentials(institutionCode);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institutionCode** | **string**| The institution_code of the institution. | 

### Return type

[**CredentialsResponseBody**](CredentialsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

