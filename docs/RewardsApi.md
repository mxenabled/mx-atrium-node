# .RewardsApi

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetchRewards**](RewardsApi.md#fetchRewards) | **POST** /users/{user_guid}/members/{member_guid}/fetch_rewards | Fetch rewards
[**listRewards**](RewardsApi.md#listRewards) | **GET** /users/{user_guid}/members/{member_guid}/rewards | List rewards
[**readReward**](RewardsApi.md#readReward) | **GET** /users/{user_guid}/members/{member_guid}/rewards/{reward_guid} | Read reward


# **fetchRewards**
> MemberResponseBody fetchRewards(memberGuid, userGuid)

Fetch rewards

The fetch rewards endpoint begins fetching rewards for a member.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.rewards.fetchRewards(memberGuid, userGuid);

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

# **listRewards**
> RewardsResponseBody listRewards(memberGuid, userGuid)

List rewards

List rewards for a given account.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.rewards.listRewards(memberGuid, userGuid);

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

[**RewardsResponseBody**](RewardsResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **readReward**
> RewardResponseBody readReward(memberGuid, rewardGuid, userGuid)

Read reward

Read a reward.

### Example
```javascript
var atrium = require('./atrium.js');

var client = new atrium.AtriumClient("YOUR_API_KEY", "YOUR_CLIENT_ID", "https://vestibule.mx.com");

var memberGuid = "MBR-123"; // string | The unique identifier for a `member`.
var rewardGuid = "RWD-123"; // string | The unique identifier for a `reward`.
var userGuid = "USR-123"; // string | The unique identifier for a `user`.

var response = client.rewards.readReward(memberGuid, rewardGuid, userGuid);

response.then(function(value) {
  console.log(value);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **memberGuid** | **string**| The unique identifier for a &#x60;member&#x60;. | 
 **rewardGuid** | **string**| The unique identifier for a &#x60;reward&#x60;. | 
 **userGuid** | **string**| The unique identifier for a &#x60;user&#x60;. | 

### Return type

[**RewardResponseBody**](RewardResponseBody.md)

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

