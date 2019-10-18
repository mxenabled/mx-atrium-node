# .MerchantsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**readMerchant**](MerchantsApi.md#readMerchant) | **GET** /merchants/{merchant_guid} | Read merchant


# **readMerchant**
> MerchantResponseBody readMerchant(merchantGuid)

Read merchant

Returns information about a particular merchant, such as a logo, name, and website.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var merchantGuid = "MCH-123"; // string | The unique identifier for a `merchant`.

var response = client.merchants.readMerchant(merchantGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantGuid** | **string**| The unique identifier for a &#x60;merchant&#x60;. | 

### Return type

[**MerchantResponseBody**](MerchantResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

