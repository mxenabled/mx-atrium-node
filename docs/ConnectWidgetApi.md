# .ConnectWidgetApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConnectWidget**](ConnectWidgetApi.md#getConnectWidget) | **POST** /users/{user_guid}/connect_widget_url | Embedding in a website


# **getConnectWidget**
> ConnectWidget getConnectWidget(userGuid, body)

Embedding in a website

This endpoint will return a URL for an embeddable version of MX Connect.

### Example
```javascript
var api = require('./api.js');

var client = new api.ConnectWidgetApi();

client.setApiKey(0, "YOUR API-KEY");
client.setApiKey(1, "YOUR CLIENT-ID");

var userGuid = "userGuid_example"; // string | The unique identifier for a `user`.
var body = {json object}; // ConnectWidgetRequestBody | Optional config options for WebView (is_mobile_webview, current_institution_code, current_member_guid, update_credentials)

var response = client.getConnectWidget(userGuid, body);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 
 **body** | [**ConnectWidgetRequestBody**](ConnectWidgetRequestBody.md)| Optional config options for WebView (is_mobile_webview, current_institution_code, current_member_guid, update_credentials) | 

### Return type

[**ConnectWidget**](ConnectWidget.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

