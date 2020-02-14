# .CreditCardProductsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**readCreditCardProduct**](CreditCardProductsApi.md#readCreditCardProduct) | **GET** /credit_card_products/{credit_card_product_guid} | Read credit card product


# **readCreditCardProduct**
> CreditCardProductResponseBody readCreditCardProduct(creditCardProductGuid)

Read credit card product

Use this endpoint to read the attributes of a credit card product.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var creditCardProductGuid = "CCA-123"; // string | The unique identifier for a `credit card product`.

var response = client.creditCardProducts.readCreditCardProduct(creditCardProductGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditCardProductGuid** | **string**| The unique identifier for a &#x60;credit card product&#x60;. | 

### Return type

[**CreditCardProductResponseBody**](CreditCardProductResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

