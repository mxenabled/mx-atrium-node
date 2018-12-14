# .InstitutionsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**listInstitutions**](InstitutionsApi.md#listInstitutions) | **GET** /institutions | List institutions
[**readInstitution**](InstitutionsApi.md#readInstitution) | **GET** /institutions/{institution_code} | Read institution
[**readInstitutionCredentials**](InstitutionsApi.md#readInstitutionCredentials) | **GET** /institutions/{institution_code}/credentials | Read institution credentials


# **listInstitutions**
> Institutions listInstitutions(name, page, recordsPerPage)

List institutions

This endpoint allows you to see what institutions are available for connection. Information returned will include the institution_code assigned to a particular institution, URLs for the financial institution's logo, and the URL for its website.<br> This endpoint takes an optional query string, name={string}. This will list only institutions in which the appended string appears. 

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var name = "name_example"; // string | This will list only institutions in which the appended string appears. (optional)
var page = 12; // number | Specify current page. (optional)
var recordsPerPage = 12; // number | Specify records per page. (optional)

var response = client.institutions.listInstitutions(name, page, recordsPerPage);

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

### Return type

[**Institutions**](Institutions.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readInstitution**
> Institution readInstitution(institutionCode)

Read institution

This endpoint allows you to see information for a specific institution.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var institutionCode = "institutionCode_example"; // string | The institution_code of the institution.

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

[**Institution**](Institution.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readInstitutionCredentials**
> Credentials readInstitutionCredentials(institutionCode)

Read institution credentials

Use this endpoint to see which credentials will be needed to create a member for a specific institution.

### Example
```javascript
var api = require('./api.js');

var client = new api.Client("YOUR_API_KEY", "YOUR_CLIENT_ID");

var institutionCode = "institutionCode_example"; // string | The institution_code of the institution.

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

[**Credentials**](Credentials.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

