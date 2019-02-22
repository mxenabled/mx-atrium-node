"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var localVarRequest = require("request");
var Promise = require("bluebird");
var defaultBasePath = 'https://vestibule.mx.com';
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    return data[discriminatorProperty];
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
var Account = (function () {
    function Account() {
    }
    Account.getAttributeTypeMap = function () {
        return Account.attributeTypeMap;
    };
    Account.discriminator = undefined;
    Account.attributeTypeMap = [
        {
            "name": "apr",
            "baseName": "apr",
            "type": "number"
        },
        {
            "name": "apy",
            "baseName": "apy",
            "type": "number"
        },
        {
            "name": "availableBalance",
            "baseName": "available_balance",
            "type": "number"
        },
        {
            "name": "availableCredit",
            "baseName": "available_credit",
            "type": "number"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "creditLimit",
            "baseName": "credit_limit",
            "type": "number"
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string"
        },
        {
            "name": "dayPaymentIsDue",
            "baseName": "day_payment_is_due",
            "type": "number"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "institutionCode",
            "baseName": "institution_code",
            "type": "string"
        },
        {
            "name": "interestRate",
            "baseName": "interest_rate",
            "type": "number"
        },
        {
            "name": "isClosed",
            "baseName": "is_closed",
            "type": "boolean"
        },
        {
            "name": "lastPayment",
            "baseName": "last_payment",
            "type": "number"
        },
        {
            "name": "maturesOn",
            "baseName": "matures_on",
            "type": "string"
        },
        {
            "name": "memberGuid",
            "baseName": "member_guid",
            "type": "string"
        },
        {
            "name": "minimumBalance",
            "baseName": "minimum_balance",
            "type": "number"
        },
        {
            "name": "minimumPayment",
            "baseName": "minimum_payment",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "originalBalance",
            "baseName": "original_balance",
            "type": "number"
        },
        {
            "name": "paymentDueAt",
            "baseName": "payment_due_at",
            "type": "string"
        },
        {
            "name": "payoffBalance",
            "baseName": "payoff_balance",
            "type": "number"
        },
        {
            "name": "startedOn",
            "baseName": "started_on",
            "type": "string"
        },
        {
            "name": "subtype",
            "baseName": "subtype",
            "type": "string"
        },
        {
            "name": "totalAccountValue",
            "baseName": "total_account_value",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        }
    ];
    return Account;
}());
exports.Account = Account;
var AccountNumber = (function () {
    function AccountNumber() {
    }
    AccountNumber.getAttributeTypeMap = function () {
        return AccountNumber.attributeTypeMap;
    };
    AccountNumber.discriminator = undefined;
    AccountNumber.attributeTypeMap = [
        {
            "name": "accountGuid",
            "baseName": "account_guid",
            "type": "string"
        },
        {
            "name": "accountNumber",
            "baseName": "account_number",
            "type": "string"
        },
        {
            "name": "memberGuid",
            "baseName": "member_guid",
            "type": "string"
        },
        {
            "name": "routingNumber",
            "baseName": "routing_number",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        }
    ];
    return AccountNumber;
}());
exports.AccountNumber = AccountNumber;
var AccountNumbersResponseBody = (function () {
    function AccountNumbersResponseBody() {
    }
    AccountNumbersResponseBody.getAttributeTypeMap = function () {
        return AccountNumbersResponseBody.attributeTypeMap;
    };
    AccountNumbersResponseBody.discriminator = undefined;
    AccountNumbersResponseBody.attributeTypeMap = [
        {
            "name": "accountNumbers",
            "baseName": "account_numbers",
            "type": "Array<AccountNumber>"
        }
    ];
    return AccountNumbersResponseBody;
}());
exports.AccountNumbersResponseBody = AccountNumbersResponseBody;
var AccountOwner = (function () {
    function AccountOwner() {
    }
    AccountOwner.getAttributeTypeMap = function () {
        return AccountOwner.attributeTypeMap;
    };
    AccountOwner.discriminator = undefined;
    AccountOwner.attributeTypeMap = [
        {
            "name": "accountGuid",
            "baseName": "account_guid",
            "type": "string"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "memberGuid",
            "baseName": "member_guid",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "owner_name",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postal_code",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "state",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        }
    ];
    return AccountOwner;
}());
exports.AccountOwner = AccountOwner;
var AccountOwnersResponseBody = (function () {
    function AccountOwnersResponseBody() {
    }
    AccountOwnersResponseBody.getAttributeTypeMap = function () {
        return AccountOwnersResponseBody.attributeTypeMap;
    };
    AccountOwnersResponseBody.discriminator = undefined;
    AccountOwnersResponseBody.attributeTypeMap = [
        {
            "name": "accountOwners",
            "baseName": "account_owners",
            "type": "Array<AccountOwner>"
        }
    ];
    return AccountOwnersResponseBody;
}());
exports.AccountOwnersResponseBody = AccountOwnersResponseBody;
var AccountResponseBody = (function () {
    function AccountResponseBody() {
    }
    AccountResponseBody.getAttributeTypeMap = function () {
        return AccountResponseBody.attributeTypeMap;
    };
    AccountResponseBody.discriminator = undefined;
    AccountResponseBody.attributeTypeMap = [
        {
            "name": "account",
            "baseName": "account",
            "type": "Account"
        }
    ];
    return AccountResponseBody;
}());
exports.AccountResponseBody = AccountResponseBody;
var AccountsResponseBody = (function () {
    function AccountsResponseBody() {
    }
    AccountsResponseBody.getAttributeTypeMap = function () {
        return AccountsResponseBody.attributeTypeMap;
    };
    AccountsResponseBody.discriminator = undefined;
    AccountsResponseBody.attributeTypeMap = [
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<Account>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return AccountsResponseBody;
}());
exports.AccountsResponseBody = AccountsResponseBody;
var Challenge = (function () {
    function Challenge() {
    }
    Challenge.getAttributeTypeMap = function () {
        return Challenge.attributeTypeMap;
    };
    Challenge.discriminator = undefined;
    Challenge.attributeTypeMap = [
        {
            "name": "fieldName",
            "baseName": "field_name",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "imageData",
            "baseName": "image_data",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<ChallengeOption>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return Challenge;
}());
exports.Challenge = Challenge;
var ChallengeOption = (function () {
    function ChallengeOption() {
    }
    ChallengeOption.getAttributeTypeMap = function () {
        return ChallengeOption.attributeTypeMap;
    };
    ChallengeOption.discriminator = undefined;
    ChallengeOption.attributeTypeMap = [
        {
            "name": "imageData",
            "baseName": "image_data",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return ChallengeOption;
}());
exports.ChallengeOption = ChallengeOption;
var ChallengesResponseBody = (function () {
    function ChallengesResponseBody() {
    }
    ChallengesResponseBody.getAttributeTypeMap = function () {
        return ChallengesResponseBody.attributeTypeMap;
    };
    ChallengesResponseBody.discriminator = undefined;
    ChallengesResponseBody.attributeTypeMap = [
        {
            "name": "challenges",
            "baseName": "challenges",
            "type": "Array<Challenge>"
        }
    ];
    return ChallengesResponseBody;
}());
exports.ChallengesResponseBody = ChallengesResponseBody;
var ConnectWidget = (function () {
    function ConnectWidget() {
    }
    ConnectWidget.getAttributeTypeMap = function () {
        return ConnectWidget.attributeTypeMap;
    };
    ConnectWidget.discriminator = undefined;
    ConnectWidget.attributeTypeMap = [
        {
            "name": "connectWidgetUrl",
            "baseName": "connect_widget_url",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        }
    ];
    return ConnectWidget;
}());
exports.ConnectWidget = ConnectWidget;
var ConnectWidgetRequestBody = (function () {
    function ConnectWidgetRequestBody() {
    }
    ConnectWidgetRequestBody.getAttributeTypeMap = function () {
        return ConnectWidgetRequestBody.attributeTypeMap;
    };
    ConnectWidgetRequestBody.discriminator = undefined;
    ConnectWidgetRequestBody.attributeTypeMap = [
        {
            "name": "isMobileWebview",
            "baseName": "is_mobile_webview",
            "type": "boolean"
        },
        {
            "name": "currentInstitutionCode",
            "baseName": "current_institution_code",
            "type": "string"
        },
        {
            "name": "currentMemberGuid",
            "baseName": "current_member_guid",
            "type": "string"
        },
        {
            "name": "updateCredentials",
            "baseName": "update_credentials",
            "type": "boolean"
        }
    ];
    return ConnectWidgetRequestBody;
}());
exports.ConnectWidgetRequestBody = ConnectWidgetRequestBody;
var ConnectWidgetResponseBody = (function () {
    function ConnectWidgetResponseBody() {
    }
    ConnectWidgetResponseBody.getAttributeTypeMap = function () {
        return ConnectWidgetResponseBody.attributeTypeMap;
    };
    ConnectWidgetResponseBody.discriminator = undefined;
    ConnectWidgetResponseBody.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "ConnectWidget"
        }
    ];
    return ConnectWidgetResponseBody;
}());
exports.ConnectWidgetResponseBody = ConnectWidgetResponseBody;
var CredentialOption = (function () {
    function CredentialOption() {
    }
    CredentialOption.getAttributeTypeMap = function () {
        return CredentialOption.attributeTypeMap;
    };
    CredentialOption.discriminator = undefined;
    CredentialOption.attributeTypeMap = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return CredentialOption;
}());
exports.CredentialOption = CredentialOption;
var CredentialRequest = (function () {
    function CredentialRequest() {
    }
    CredentialRequest.getAttributeTypeMap = function () {
        return CredentialRequest.attributeTypeMap;
    };
    CredentialRequest.discriminator = undefined;
    CredentialRequest.attributeTypeMap = [
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return CredentialRequest;
}());
exports.CredentialRequest = CredentialRequest;
var CredentialResponse = (function () {
    function CredentialResponse() {
    }
    CredentialResponse.getAttributeTypeMap = function () {
        return CredentialResponse.attributeTypeMap;
    };
    CredentialResponse.discriminator = undefined;
    CredentialResponse.attributeTypeMap = [
        {
            "name": "fieldName",
            "baseName": "field_name",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<CredentialOption>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return CredentialResponse;
}());
exports.CredentialResponse = CredentialResponse;
var CredentialsResponseBody = (function () {
    function CredentialsResponseBody() {
    }
    CredentialsResponseBody.getAttributeTypeMap = function () {
        return CredentialsResponseBody.attributeTypeMap;
    };
    CredentialsResponseBody.discriminator = undefined;
    CredentialsResponseBody.attributeTypeMap = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "Array<CredentialResponse>"
        }
    ];
    return CredentialsResponseBody;
}());
exports.CredentialsResponseBody = CredentialsResponseBody;
var Holding = (function () {
    function Holding() {
    }
    Holding.getAttributeTypeMap = function () {
        return Holding.attributeTypeMap;
    };
    Holding.discriminator = undefined;
    Holding.attributeTypeMap = [
        {
            "name": "accountGuid",
            "baseName": "account_guid",
            "type": "string"
        },
        {
            "name": "costBasis",
            "baseName": "cost_basis",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string"
        },
        {
            "name": "cusip",
            "baseName": "cusip",
            "type": "string"
        },
        {
            "name": "dailyChange",
            "baseName": "daily_change",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "holdingType",
            "baseName": "holding_type",
            "type": "string"
        },
        {
            "name": "marketValue",
            "baseName": "market_value",
            "type": "number"
        },
        {
            "name": "memberGuid",
            "baseName": "member_guid",
            "type": "string"
        },
        {
            "name": "purchasePrice",
            "baseName": "purchase_price",
            "type": "number"
        },
        {
            "name": "shares",
            "baseName": "shares",
            "type": "number"
        },
        {
            "name": "symbol",
            "baseName": "symbol",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        }
    ];
    return Holding;
}());
exports.Holding = Holding;
var HoldingResponseBody = (function () {
    function HoldingResponseBody() {
    }
    HoldingResponseBody.getAttributeTypeMap = function () {
        return HoldingResponseBody.attributeTypeMap;
    };
    HoldingResponseBody.discriminator = undefined;
    HoldingResponseBody.attributeTypeMap = [
        {
            "name": "holding",
            "baseName": "holding",
            "type": "Holding"
        }
    ];
    return HoldingResponseBody;
}());
exports.HoldingResponseBody = HoldingResponseBody;
var HoldingsResponseBody = (function () {
    function HoldingsResponseBody() {
    }
    HoldingsResponseBody.getAttributeTypeMap = function () {
        return HoldingsResponseBody.attributeTypeMap;
    };
    HoldingsResponseBody.discriminator = undefined;
    HoldingsResponseBody.attributeTypeMap = [
        {
            "name": "holdings",
            "baseName": "holdings",
            "type": "Array<Holding>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return HoldingsResponseBody;
}());
exports.HoldingsResponseBody = HoldingsResponseBody;
var Institution = (function () {
    function Institution() {
    }
    Institution.getAttributeTypeMap = function () {
        return Institution.attributeTypeMap;
    };
    Institution.discriminator = undefined;
    Institution.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "mediumLogoUrl",
            "baseName": "medium_logo_url",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "smallLogoUrl",
            "baseName": "small_logo_url",
            "type": "string"
        },
        {
            "name": "supportsAccountIdentification",
            "baseName": "supports_account_identification",
            "type": "boolean"
        },
        {
            "name": "supportsAccountStatement",
            "baseName": "supports_account_statement",
            "type": "boolean"
        },
        {
            "name": "supportsAccountVerification",
            "baseName": "supports_account_verification",
            "type": "boolean"
        },
        {
            "name": "supportsTransactionHistory",
            "baseName": "supports_transaction_history",
            "type": "boolean"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }
    ];
    return Institution;
}());
exports.Institution = Institution;
var InstitutionResponseBody = (function () {
    function InstitutionResponseBody() {
    }
    InstitutionResponseBody.getAttributeTypeMap = function () {
        return InstitutionResponseBody.attributeTypeMap;
    };
    InstitutionResponseBody.discriminator = undefined;
    InstitutionResponseBody.attributeTypeMap = [
        {
            "name": "institution",
            "baseName": "institution",
            "type": "Institution"
        }
    ];
    return InstitutionResponseBody;
}());
exports.InstitutionResponseBody = InstitutionResponseBody;
var InstitutionsResponseBody = (function () {
    function InstitutionsResponseBody() {
    }
    InstitutionsResponseBody.getAttributeTypeMap = function () {
        return InstitutionsResponseBody.attributeTypeMap;
    };
    InstitutionsResponseBody.discriminator = undefined;
    InstitutionsResponseBody.attributeTypeMap = [
        {
            "name": "institutions",
            "baseName": "institutions",
            "type": "Array<Institution>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return InstitutionsResponseBody;
}());
exports.InstitutionsResponseBody = InstitutionsResponseBody;
var Member = (function () {
    function Member() {
    }
    Member.getAttributeTypeMap = function () {
        return Member.attributeTypeMap;
    };
    Member.discriminator = undefined;
    Member.attributeTypeMap = [
        {
            "name": "aggregatedAt",
            "baseName": "aggregated_at",
            "type": "string"
        },
        {
            "name": "connectionStatus",
            "baseName": "connection_status",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "institutionCode",
            "baseName": "institution_code",
            "type": "string"
        },
        {
            "name": "isBeingAggregated",
            "baseName": "is_being_aggregated",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "successfullyAggregatedAt",
            "baseName": "successfully_aggregated_at",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        }
    ];
    return Member;
}());
exports.Member = Member;
var MemberConnectionStatus = (function () {
    function MemberConnectionStatus() {
    }
    MemberConnectionStatus.getAttributeTypeMap = function () {
        return MemberConnectionStatus.attributeTypeMap;
    };
    MemberConnectionStatus.discriminator = undefined;
    MemberConnectionStatus.attributeTypeMap = [
        {
            "name": "aggregatedAt",
            "baseName": "aggregated_at",
            "type": "string"
        },
        {
            "name": "challenges",
            "baseName": "challenges",
            "type": "Array<Challenge>"
        },
        {
            "name": "connectionStatus",
            "baseName": "connection_status",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "hasProcessedAccounts",
            "baseName": "has_processed_accounts",
            "type": "boolean"
        },
        {
            "name": "hasProcessedTransactions",
            "baseName": "has_processed_transactions",
            "type": "boolean"
        },
        {
            "name": "isBeingAggregated",
            "baseName": "is_being_aggregated",
            "type": "boolean"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "successfullyAggregatedAt",
            "baseName": "successfully_aggregated_at",
            "type": "string"
        }
    ];
    return MemberConnectionStatus;
}());
exports.MemberConnectionStatus = MemberConnectionStatus;
var MemberConnectionStatusResponseBody = (function () {
    function MemberConnectionStatusResponseBody() {
    }
    MemberConnectionStatusResponseBody.getAttributeTypeMap = function () {
        return MemberConnectionStatusResponseBody.attributeTypeMap;
    };
    MemberConnectionStatusResponseBody.discriminator = undefined;
    MemberConnectionStatusResponseBody.attributeTypeMap = [
        {
            "name": "member",
            "baseName": "member",
            "type": "MemberConnectionStatus"
        }
    ];
    return MemberConnectionStatusResponseBody;
}());
exports.MemberConnectionStatusResponseBody = MemberConnectionStatusResponseBody;
var MemberCreateRequest = (function () {
    function MemberCreateRequest() {
    }
    MemberCreateRequest.getAttributeTypeMap = function () {
        return MemberCreateRequest.attributeTypeMap;
    };
    MemberCreateRequest.discriminator = undefined;
    MemberCreateRequest.attributeTypeMap = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "Array<CredentialRequest>"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "institutionCode",
            "baseName": "institution_code",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string"
        }
    ];
    return MemberCreateRequest;
}());
exports.MemberCreateRequest = MemberCreateRequest;
var MemberCreateRequestBody = (function () {
    function MemberCreateRequestBody() {
    }
    MemberCreateRequestBody.getAttributeTypeMap = function () {
        return MemberCreateRequestBody.attributeTypeMap;
    };
    MemberCreateRequestBody.discriminator = undefined;
    MemberCreateRequestBody.attributeTypeMap = [
        {
            "name": "member",
            "baseName": "member",
            "type": "MemberCreateRequest"
        }
    ];
    return MemberCreateRequestBody;
}());
exports.MemberCreateRequestBody = MemberCreateRequestBody;
var MemberResponseBody = (function () {
    function MemberResponseBody() {
    }
    MemberResponseBody.getAttributeTypeMap = function () {
        return MemberResponseBody.attributeTypeMap;
    };
    MemberResponseBody.discriminator = undefined;
    MemberResponseBody.attributeTypeMap = [
        {
            "name": "member",
            "baseName": "member",
            "type": "Member"
        }
    ];
    return MemberResponseBody;
}());
exports.MemberResponseBody = MemberResponseBody;
var MemberResumeRequest = (function () {
    function MemberResumeRequest() {
    }
    MemberResumeRequest.getAttributeTypeMap = function () {
        return MemberResumeRequest.attributeTypeMap;
    };
    MemberResumeRequest.discriminator = undefined;
    MemberResumeRequest.attributeTypeMap = [
        {
            "name": "challenges",
            "baseName": "challenges",
            "type": "Array<CredentialRequest>"
        }
    ];
    return MemberResumeRequest;
}());
exports.MemberResumeRequest = MemberResumeRequest;
var MemberResumeRequestBody = (function () {
    function MemberResumeRequestBody() {
    }
    MemberResumeRequestBody.getAttributeTypeMap = function () {
        return MemberResumeRequestBody.attributeTypeMap;
    };
    MemberResumeRequestBody.discriminator = undefined;
    MemberResumeRequestBody.attributeTypeMap = [
        {
            "name": "member",
            "baseName": "member",
            "type": "MemberResumeRequest"
        }
    ];
    return MemberResumeRequestBody;
}());
exports.MemberResumeRequestBody = MemberResumeRequestBody;
var MemberUpdateRequest = (function () {
    function MemberUpdateRequest() {
    }
    MemberUpdateRequest.getAttributeTypeMap = function () {
        return MemberUpdateRequest.attributeTypeMap;
    };
    MemberUpdateRequest.discriminator = undefined;
    MemberUpdateRequest.attributeTypeMap = [
        {
            "name": "credentials",
            "baseName": "credentials",
            "type": "Array<CredentialRequest>"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string"
        }
    ];
    return MemberUpdateRequest;
}());
exports.MemberUpdateRequest = MemberUpdateRequest;
var MemberUpdateRequestBody = (function () {
    function MemberUpdateRequestBody() {
    }
    MemberUpdateRequestBody.getAttributeTypeMap = function () {
        return MemberUpdateRequestBody.attributeTypeMap;
    };
    MemberUpdateRequestBody.discriminator = undefined;
    MemberUpdateRequestBody.attributeTypeMap = [
        {
            "name": "member",
            "baseName": "member",
            "type": "MemberUpdateRequest"
        }
    ];
    return MemberUpdateRequestBody;
}());
exports.MemberUpdateRequestBody = MemberUpdateRequestBody;
var MembersResponseBody = (function () {
    function MembersResponseBody() {
    }
    MembersResponseBody.getAttributeTypeMap = function () {
        return MembersResponseBody.attributeTypeMap;
    };
    MembersResponseBody.discriminator = undefined;
    MembersResponseBody.attributeTypeMap = [
        {
            "name": "members",
            "baseName": "members",
            "type": "Array<Member>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return MembersResponseBody;
}());
exports.MembersResponseBody = MembersResponseBody;
var Merchant = (function () {
    function Merchant() {
    }
    Merchant.getAttributeTypeMap = function () {
        return Merchant.attributeTypeMap;
    };
    Merchant.discriminator = undefined;
    Merchant.attributeTypeMap = [
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "logoUrl",
            "baseName": "logo_url",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "websiteUrl",
            "baseName": "website_url",
            "type": "string"
        }
    ];
    return Merchant;
}());
exports.Merchant = Merchant;
var MerchantResponseBody = (function () {
    function MerchantResponseBody() {
    }
    MerchantResponseBody.getAttributeTypeMap = function () {
        return MerchantResponseBody.attributeTypeMap;
    };
    MerchantResponseBody.discriminator = undefined;
    MerchantResponseBody.attributeTypeMap = [
        {
            "name": "merchant",
            "baseName": "merchant",
            "type": "Merchant"
        }
    ];
    return MerchantResponseBody;
}());
exports.MerchantResponseBody = MerchantResponseBody;
var Pagination = (function () {
    function Pagination() {
    }
    Pagination.getAttributeTypeMap = function () {
        return Pagination.attributeTypeMap;
    };
    Pagination.discriminator = undefined;
    Pagination.attributeTypeMap = [
        {
            "name": "currentPage",
            "baseName": "current_page",
            "type": "number"
        },
        {
            "name": "perPage",
            "baseName": "per_page",
            "type": "number"
        },
        {
            "name": "totalEntries",
            "baseName": "total_entries",
            "type": "number"
        },
        {
            "name": "totalPages",
            "baseName": "total_pages",
            "type": "number"
        }
    ];
    return Pagination;
}());
exports.Pagination = Pagination;
var Statement = (function () {
    function Statement() {
    }
    Statement.getAttributeTypeMap = function () {
        return Statement.attributeTypeMap;
    };
    Statement.discriminator = undefined;
    Statement.attributeTypeMap = [
        {
            "name": "accountGuid",
            "baseName": "account_guid",
            "type": "string"
        },
        {
            "name": "contentHash",
            "baseName": "content_hash",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "memberGuid",
            "baseName": "member_guid",
            "type": "string"
        },
        {
            "name": "uri",
            "baseName": "uri",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        }
    ];
    return Statement;
}());
exports.Statement = Statement;
var StatementResponseBody = (function () {
    function StatementResponseBody() {
    }
    StatementResponseBody.getAttributeTypeMap = function () {
        return StatementResponseBody.attributeTypeMap;
    };
    StatementResponseBody.discriminator = undefined;
    StatementResponseBody.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "Statement"
        }
    ];
    return StatementResponseBody;
}());
exports.StatementResponseBody = StatementResponseBody;
var StatementsResponseBody = (function () {
    function StatementsResponseBody() {
    }
    StatementsResponseBody.getAttributeTypeMap = function () {
        return StatementsResponseBody.attributeTypeMap;
    };
    StatementsResponseBody.discriminator = undefined;
    StatementsResponseBody.attributeTypeMap = [
        {
            "name": "statements",
            "baseName": "statements",
            "type": "Array<Statement>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return StatementsResponseBody;
}());
exports.StatementsResponseBody = StatementsResponseBody;
var Transaction = (function () {
    function Transaction() {
    }
    Transaction.getAttributeTypeMap = function () {
        return Transaction.attributeTypeMap;
    };
    Transaction.discriminator = undefined;
    Transaction.attributeTypeMap = [
        {
            "name": "accountGuid",
            "baseName": "account_guid",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "checkNumber",
            "baseName": "check_number",
            "type": "number"
        },
        {
            "name": "checkNumberString",
            "baseName": "check_number_string",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string"
        },
        {
            "name": "currencyCode",
            "baseName": "currency_code",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "isBillPay",
            "baseName": "is_bill_pay",
            "type": "boolean"
        },
        {
            "name": "isDirectDeposit",
            "baseName": "is_direct_deposit",
            "type": "boolean"
        },
        {
            "name": "isExpense",
            "baseName": "is_expense",
            "type": "boolean"
        },
        {
            "name": "isFee",
            "baseName": "is_fee",
            "type": "boolean"
        },
        {
            "name": "isIncome",
            "baseName": "is_income",
            "type": "boolean"
        },
        {
            "name": "isInternational",
            "baseName": "is_international",
            "type": "boolean"
        },
        {
            "name": "isOverdraftFee",
            "baseName": "is_overdraft_fee",
            "type": "boolean"
        },
        {
            "name": "isPayrollAdvance",
            "baseName": "is_payroll_advance",
            "type": "boolean"
        },
        {
            "name": "latitude",
            "baseName": "latitude",
            "type": "number"
        },
        {
            "name": "longitude",
            "baseName": "longitude",
            "type": "number"
        },
        {
            "name": "memberGuid",
            "baseName": "member_guid",
            "type": "string"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "merchantCategoryCode",
            "baseName": "merchant_category_code",
            "type": "number"
        },
        {
            "name": "originalDescription",
            "baseName": "original_description",
            "type": "string"
        },
        {
            "name": "postedAt",
            "baseName": "posted_at",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "topLevelCategory",
            "baseName": "top_level_category",
            "type": "string"
        },
        {
            "name": "transactedAt",
            "baseName": "transacted_at",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string"
        },
        {
            "name": "userGuid",
            "baseName": "user_guid",
            "type": "string"
        }
    ];
    return Transaction;
}());
exports.Transaction = Transaction;
var TransactionCleanseAndCategorizeRequest = (function () {
    function TransactionCleanseAndCategorizeRequest() {
    }
    TransactionCleanseAndCategorizeRequest.getAttributeTypeMap = function () {
        return TransactionCleanseAndCategorizeRequest.attributeTypeMap;
    };
    TransactionCleanseAndCategorizeRequest.discriminator = undefined;
    TransactionCleanseAndCategorizeRequest.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return TransactionCleanseAndCategorizeRequest;
}());
exports.TransactionCleanseAndCategorizeRequest = TransactionCleanseAndCategorizeRequest;
var TransactionCleanseAndCategorizeResponse = (function () {
    function TransactionCleanseAndCategorizeResponse() {
    }
    TransactionCleanseAndCategorizeResponse.getAttributeTypeMap = function () {
        return TransactionCleanseAndCategorizeResponse.attributeTypeMap;
    };
    TransactionCleanseAndCategorizeResponse.discriminator = undefined;
    TransactionCleanseAndCategorizeResponse.attributeTypeMap = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "isBillPay",
            "baseName": "is_bill_pay",
            "type": "boolean"
        },
        {
            "name": "isDirectDeposit",
            "baseName": "is_direct_deposit",
            "type": "boolean"
        },
        {
            "name": "isExpense",
            "baseName": "is_expense",
            "type": "boolean"
        },
        {
            "name": "isFee",
            "baseName": "is_fee",
            "type": "boolean"
        },
        {
            "name": "isIncome",
            "baseName": "is_income",
            "type": "boolean"
        },
        {
            "name": "isInternational",
            "baseName": "is_international",
            "type": "boolean"
        },
        {
            "name": "isOverdraftFee",
            "baseName": "is_overdraft_fee",
            "type": "boolean"
        },
        {
            "name": "isPayrollAdvance",
            "baseName": "is_payroll_advance",
            "type": "boolean"
        }
    ];
    return TransactionCleanseAndCategorizeResponse;
}());
exports.TransactionCleanseAndCategorizeResponse = TransactionCleanseAndCategorizeResponse;
var TransactionResponseBody = (function () {
    function TransactionResponseBody() {
    }
    TransactionResponseBody.getAttributeTypeMap = function () {
        return TransactionResponseBody.attributeTypeMap;
    };
    TransactionResponseBody.discriminator = undefined;
    TransactionResponseBody.attributeTypeMap = [
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "Transaction"
        }
    ];
    return TransactionResponseBody;
}());
exports.TransactionResponseBody = TransactionResponseBody;
var TransactionsCleanseAndCategorizeRequestBody = (function () {
    function TransactionsCleanseAndCategorizeRequestBody() {
    }
    TransactionsCleanseAndCategorizeRequestBody.getAttributeTypeMap = function () {
        return TransactionsCleanseAndCategorizeRequestBody.attributeTypeMap;
    };
    TransactionsCleanseAndCategorizeRequestBody.discriminator = undefined;
    TransactionsCleanseAndCategorizeRequestBody.attributeTypeMap = [
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<TransactionCleanseAndCategorizeRequest>"
        }
    ];
    return TransactionsCleanseAndCategorizeRequestBody;
}());
exports.TransactionsCleanseAndCategorizeRequestBody = TransactionsCleanseAndCategorizeRequestBody;
var TransactionsCleanseAndCategorizeResponseBody = (function () {
    function TransactionsCleanseAndCategorizeResponseBody() {
    }
    TransactionsCleanseAndCategorizeResponseBody.getAttributeTypeMap = function () {
        return TransactionsCleanseAndCategorizeResponseBody.attributeTypeMap;
    };
    TransactionsCleanseAndCategorizeResponseBody.discriminator = undefined;
    TransactionsCleanseAndCategorizeResponseBody.attributeTypeMap = [
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<TransactionCleanseAndCategorizeResponse>"
        }
    ];
    return TransactionsCleanseAndCategorizeResponseBody;
}());
exports.TransactionsCleanseAndCategorizeResponseBody = TransactionsCleanseAndCategorizeResponseBody;
var TransactionsResponseBody = (function () {
    function TransactionsResponseBody() {
    }
    TransactionsResponseBody.getAttributeTypeMap = function () {
        return TransactionsResponseBody.attributeTypeMap;
    };
    TransactionsResponseBody.discriminator = undefined;
    TransactionsResponseBody.attributeTypeMap = [
        {
            "name": "transactions",
            "baseName": "transactions",
            "type": "Array<Transaction>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return TransactionsResponseBody;
}());
exports.TransactionsResponseBody = TransactionsResponseBody;
var User = (function () {
    function User() {
    }
    User.getAttributeTypeMap = function () {
        return User.attributeTypeMap;
    };
    User.discriminator = undefined;
    User.attributeTypeMap = [
        {
            "name": "guid",
            "baseName": "guid",
            "type": "string"
        },
        {
            "name": "identifier",
            "baseName": "identifier",
            "type": "string"
        },
        {
            "name": "isDisabled",
            "baseName": "is_disabled",
            "type": "boolean"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "string"
        }
    ];
    return User;
}());
exports.User = User;
var UserCreateRequestBody = (function () {
    function UserCreateRequestBody() {
    }
    UserCreateRequestBody.getAttributeTypeMap = function () {
        return UserCreateRequestBody.attributeTypeMap;
    };
    UserCreateRequestBody.discriminator = undefined;
    UserCreateRequestBody.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        }
    ];
    return UserCreateRequestBody;
}());
exports.UserCreateRequestBody = UserCreateRequestBody;
var UserResponseBody = (function () {
    function UserResponseBody() {
    }
    UserResponseBody.getAttributeTypeMap = function () {
        return UserResponseBody.attributeTypeMap;
    };
    UserResponseBody.discriminator = undefined;
    UserResponseBody.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        }
    ];
    return UserResponseBody;
}());
exports.UserResponseBody = UserResponseBody;
var UserUpdateRequestBody = (function () {
    function UserUpdateRequestBody() {
    }
    UserUpdateRequestBody.getAttributeTypeMap = function () {
        return UserUpdateRequestBody.attributeTypeMap;
    };
    UserUpdateRequestBody.discriminator = undefined;
    UserUpdateRequestBody.attributeTypeMap = [
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        }
    ];
    return UserUpdateRequestBody;
}());
exports.UserUpdateRequestBody = UserUpdateRequestBody;
var UsersResponseBody = (function () {
    function UsersResponseBody() {
    }
    UsersResponseBody.getAttributeTypeMap = function () {
        return UsersResponseBody.attributeTypeMap;
    };
    UsersResponseBody.discriminator = undefined;
    UsersResponseBody.attributeTypeMap = [
        {
            "name": "users",
            "baseName": "users",
            "type": "Array<User>"
        },
        {
            "name": "pagination",
            "baseName": "pagination",
            "type": "Pagination"
        }
    ];
    return UsersResponseBody;
}());
exports.UsersResponseBody = UsersResponseBody;
var enumsMap = {};
var typeMap = {
    "Account": Account,
    "AccountNumber": AccountNumber,
    "AccountNumbersResponseBody": AccountNumbersResponseBody,
    "AccountOwner": AccountOwner,
    "AccountOwnersResponseBody": AccountOwnersResponseBody,
    "AccountResponseBody": AccountResponseBody,
    "AccountsResponseBody": AccountsResponseBody,
    "Challenge": Challenge,
    "ChallengeOption": ChallengeOption,
    "ChallengesResponseBody": ChallengesResponseBody,
    "ConnectWidget": ConnectWidget,
    "ConnectWidgetRequestBody": ConnectWidgetRequestBody,
    "ConnectWidgetResponseBody": ConnectWidgetResponseBody,
    "CredentialOption": CredentialOption,
    "CredentialRequest": CredentialRequest,
    "CredentialResponse": CredentialResponse,
    "CredentialsResponseBody": CredentialsResponseBody,
    "Holding": Holding,
    "HoldingResponseBody": HoldingResponseBody,
    "HoldingsResponseBody": HoldingsResponseBody,
    "Institution": Institution,
    "InstitutionResponseBody": InstitutionResponseBody,
    "InstitutionsResponseBody": InstitutionsResponseBody,
    "Member": Member,
    "MemberConnectionStatus": MemberConnectionStatus,
    "MemberConnectionStatusResponseBody": MemberConnectionStatusResponseBody,
    "MemberCreateRequest": MemberCreateRequest,
    "MemberCreateRequestBody": MemberCreateRequestBody,
    "MemberResponseBody": MemberResponseBody,
    "MemberResumeRequest": MemberResumeRequest,
    "MemberResumeRequestBody": MemberResumeRequestBody,
    "MemberUpdateRequest": MemberUpdateRequest,
    "MemberUpdateRequestBody": MemberUpdateRequestBody,
    "MembersResponseBody": MembersResponseBody,
    "Merchant": Merchant,
    "MerchantResponseBody": MerchantResponseBody,
    "Pagination": Pagination,
    "Statement": Statement,
    "StatementResponseBody": StatementResponseBody,
    "StatementsResponseBody": StatementsResponseBody,
    "Transaction": Transaction,
    "TransactionCleanseAndCategorizeRequest": TransactionCleanseAndCategorizeRequest,
    "TransactionCleanseAndCategorizeResponse": TransactionCleanseAndCategorizeResponse,
    "TransactionResponseBody": TransactionResponseBody,
    "TransactionsCleanseAndCategorizeRequestBody": TransactionsCleanseAndCategorizeRequestBody,
    "TransactionsCleanseAndCategorizeResponseBody": TransactionsCleanseAndCategorizeResponseBody,
    "TransactionsResponseBody": TransactionsResponseBody,
    "User": User,
    "UserCreateRequestBody": UserCreateRequestBody,
    "UserResponseBody": UserResponseBody,
    "UserUpdateRequestBody": UserUpdateRequestBody,
    "UsersResponseBody": UsersResponseBody,
};
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
var AccountsApiApiKeys;
(function (AccountsApiApiKeys) {
    AccountsApiApiKeys[AccountsApiApiKeys["apiKey"] = 0] = "apiKey";
    AccountsApiApiKeys[AccountsApiApiKeys["clientID"] = 1] = "clientID";
})(AccountsApiApiKeys = exports.AccountsApiApiKeys || (exports.AccountsApiApiKeys = {}));
var AccountsApi = (function () {
    function AccountsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(AccountsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    AccountsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    AccountsApi.prototype.setApiKey = function (key, value) {
        this.authentications[AccountsApiApiKeys[key]].apiKey = value;
    };
    AccountsApi.prototype.listAccountTransactions = function (accountGuid, userGuid, fromDate, toDate, page, recordsPerPage) {
        var localVarPath = this.basePath + '/users/{user_guid}/accounts/{account_guid}/transactions'
            .replace('{' + 'account_guid' + '}', encodeURIComponent(String(accountGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (accountGuid === null || accountGuid === undefined) {
            throw new Error('Required parameter accountGuid was null or undefined when calling listAccountTransactions.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listAccountTransactions.');
        }
        if (fromDate !== undefined) {
            localVarQueryParameters['from_date'] = ObjectSerializer.serialize(fromDate, "string");
        }
        if (toDate !== undefined) {
            localVarQueryParameters['to_date'] = ObjectSerializer.serialize(toDate, "string");
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "TransactionsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    AccountsApi.prototype.listUserAccounts = function (userGuid, page, recordsPerPage) {
        var localVarPath = this.basePath + '/users/{user_guid}/accounts'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listUserAccounts.');
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    AccountsApi.prototype.readAccount = function (accountGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/accounts/{account_guid}'
            .replace('{' + 'account_guid' + '}', encodeURIComponent(String(accountGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (accountGuid === null || accountGuid === undefined) {
            throw new Error('Required parameter accountGuid was null or undefined when calling readAccount.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readAccount.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    AccountsApi.prototype.readAccountByMemberGUID = function (accountGuid, memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/accounts/{account_guid}'
            .replace('{' + 'account_guid' + '}', encodeURIComponent(String(accountGuid)))
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (accountGuid === null || accountGuid === undefined) {
            throw new Error('Required parameter accountGuid was null or undefined when calling readAccountByMemberGUID.');
        }
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling readAccountByMemberGUID.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readAccountByMemberGUID.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return AccountsApi;
}());
exports.AccountsApi = AccountsApi;
var ConnectWidgetApiApiKeys;
(function (ConnectWidgetApiApiKeys) {
    ConnectWidgetApiApiKeys[ConnectWidgetApiApiKeys["apiKey"] = 0] = "apiKey";
    ConnectWidgetApiApiKeys[ConnectWidgetApiApiKeys["clientID"] = 1] = "clientID";
})(ConnectWidgetApiApiKeys = exports.ConnectWidgetApiApiKeys || (exports.ConnectWidgetApiApiKeys = {}));
var ConnectWidgetApi = (function () {
    function ConnectWidgetApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ConnectWidgetApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectWidgetApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    ConnectWidgetApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ConnectWidgetApi.prototype.setApiKey = function (key, value) {
        this.authentications[ConnectWidgetApiApiKeys[key]].apiKey = value;
    };
    ConnectWidgetApi.prototype.getConnectWidget = function (userGuid, body) {
        var localVarPath = this.basePath + '/users/{user_guid}/connect_widget_url'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling getConnectWidget.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getConnectWidget.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "ConnectWidgetRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ConnectWidgetResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ConnectWidgetApi;
}());
exports.ConnectWidgetApi = ConnectWidgetApi;
var HoldingsApiApiKeys;
(function (HoldingsApiApiKeys) {
    HoldingsApiApiKeys[HoldingsApiApiKeys["apiKey"] = 0] = "apiKey";
    HoldingsApiApiKeys[HoldingsApiApiKeys["clientID"] = 1] = "clientID";
})(HoldingsApiApiKeys = exports.HoldingsApiApiKeys || (exports.HoldingsApiApiKeys = {}));
var HoldingsApi = (function () {
    function HoldingsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(HoldingsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HoldingsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    HoldingsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    HoldingsApi.prototype.setApiKey = function (key, value) {
        this.authentications[HoldingsApiApiKeys[key]].apiKey = value;
    };
    HoldingsApi.prototype.listHoldings = function (userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/holdings'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listHoldings.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "HoldingsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    HoldingsApi.prototype.listHoldingsByAccount = function (accountGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/accounts/{account_guid}/holdings'
            .replace('{' + 'account_guid' + '}', encodeURIComponent(String(accountGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (accountGuid === null || accountGuid === undefined) {
            throw new Error('Required parameter accountGuid was null or undefined when calling listHoldingsByAccount.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listHoldingsByAccount.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "HoldingsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    HoldingsApi.prototype.listHoldingsByMember = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/holdings'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listHoldingsByMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listHoldingsByMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "HoldingsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    HoldingsApi.prototype.readHolding = function (holdingGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/holdings/{holding_guid}'
            .replace('{' + 'holding_guid' + '}', encodeURIComponent(String(holdingGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (holdingGuid === null || holdingGuid === undefined) {
            throw new Error('Required parameter holdingGuid was null or undefined when calling readHolding.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readHolding.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "HoldingResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return HoldingsApi;
}());
exports.HoldingsApi = HoldingsApi;
var IdentityApiApiKeys;
(function (IdentityApiApiKeys) {
    IdentityApiApiKeys[IdentityApiApiKeys["apiKey"] = 0] = "apiKey";
    IdentityApiApiKeys[IdentityApiApiKeys["clientID"] = 1] = "clientID";
})(IdentityApiApiKeys = exports.IdentityApiApiKeys || (exports.IdentityApiApiKeys = {}));
var IdentityApi = (function () {
    function IdentityApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(IdentityApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IdentityApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    IdentityApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    IdentityApi.prototype.setApiKey = function (key, value) {
        this.authentications[IdentityApiApiKeys[key]].apiKey = value;
    };
    IdentityApi.prototype.identifyMember = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/identify'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling identifyMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling identifyMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    IdentityApi.prototype.listAccountOwners = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/account_owners'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listAccountOwners.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listAccountOwners.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountOwnersResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return IdentityApi;
}());
exports.IdentityApi = IdentityApi;
var InstitutionsApiApiKeys;
(function (InstitutionsApiApiKeys) {
    InstitutionsApiApiKeys[InstitutionsApiApiKeys["apiKey"] = 0] = "apiKey";
    InstitutionsApiApiKeys[InstitutionsApiApiKeys["clientID"] = 1] = "clientID";
})(InstitutionsApiApiKeys = exports.InstitutionsApiApiKeys || (exports.InstitutionsApiApiKeys = {}));
var InstitutionsApi = (function () {
    function InstitutionsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(InstitutionsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InstitutionsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    InstitutionsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    InstitutionsApi.prototype.setApiKey = function (key, value) {
        this.authentications[InstitutionsApiApiKeys[key]].apiKey = value;
    };
    InstitutionsApi.prototype.listInstitutions = function (name, page, recordsPerPage, supportsAccountIdentification, supportsAccountStatement, supportsAccountVerification, supportsTransactionHistory) {
        var localVarPath = this.basePath + '/institutions';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        if (supportsAccountIdentification !== undefined) {
            localVarQueryParameters['supports_account_identification'] = ObjectSerializer.serialize(supportsAccountIdentification, "boolean");
        }
        if (supportsAccountStatement !== undefined) {
            localVarQueryParameters['supports_account_statement'] = ObjectSerializer.serialize(supportsAccountStatement, "boolean");
        }
        if (supportsAccountVerification !== undefined) {
            localVarQueryParameters['supports_account_verification'] = ObjectSerializer.serialize(supportsAccountVerification, "boolean");
        }
        if (supportsTransactionHistory !== undefined) {
            localVarQueryParameters['supports_transaction_history'] = ObjectSerializer.serialize(supportsTransactionHistory, "boolean");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "InstitutionsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    InstitutionsApi.prototype.readInstitution = function (institutionCode) {
        var localVarPath = this.basePath + '/institutions/{institution_code}'
            .replace('{' + 'institution_code' + '}', encodeURIComponent(String(institutionCode)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (institutionCode === null || institutionCode === undefined) {
            throw new Error('Required parameter institutionCode was null or undefined when calling readInstitution.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "InstitutionResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    InstitutionsApi.prototype.readInstitutionCredentials = function (institutionCode) {
        var localVarPath = this.basePath + '/institutions/{institution_code}/credentials'
            .replace('{' + 'institution_code' + '}', encodeURIComponent(String(institutionCode)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (institutionCode === null || institutionCode === undefined) {
            throw new Error('Required parameter institutionCode was null or undefined when calling readInstitutionCredentials.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CredentialsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return InstitutionsApi;
}());
exports.InstitutionsApi = InstitutionsApi;
var MembersApiApiKeys;
(function (MembersApiApiKeys) {
    MembersApiApiKeys[MembersApiApiKeys["apiKey"] = 0] = "apiKey";
    MembersApiApiKeys[MembersApiApiKeys["clientID"] = 1] = "clientID";
})(MembersApiApiKeys = exports.MembersApiApiKeys || (exports.MembersApiApiKeys = {}));
var MembersApi = (function () {
    function MembersApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(MembersApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MembersApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    MembersApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    MembersApi.prototype.setApiKey = function (key, value) {
        this.authentications[MembersApiApiKeys[key]].apiKey = value;
    };
    MembersApi.prototype.aggregateMember = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/aggregate'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling aggregateMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling aggregateMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.createMember = function (userGuid, body) {
        var localVarPath = this.basePath + '/users/{user_guid}/members'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling createMember.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "MemberCreateRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.deleteMember = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling deleteMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling deleteMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.extendHistory = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/extend_history'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling extendHistory.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling extendHistory.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.listMemberAccounts = function (memberGuid, userGuid, page, recordsPerPage) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/accounts'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listMemberAccounts.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listMemberAccounts.');
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.listMemberCredentials = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/credentials'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listMemberCredentials.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listMemberCredentials.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "CredentialsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.listMemberMFAChallenges = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/challenges'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listMemberMFAChallenges.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listMemberMFAChallenges.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ChallengesResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.listMemberTransactions = function (memberGuid, userGuid, fromDate, toDate, page, recordsPerPage) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/transactions'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listMemberTransactions.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listMemberTransactions.');
        }
        if (fromDate !== undefined) {
            localVarQueryParameters['from_date'] = ObjectSerializer.serialize(fromDate, "string");
        }
        if (toDate !== undefined) {
            localVarQueryParameters['to_date'] = ObjectSerializer.serialize(toDate, "string");
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "TransactionsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.listMembers = function (userGuid, page, recordsPerPage) {
        var localVarPath = this.basePath + '/users/{user_guid}/members'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listMembers.');
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MembersResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.readMember = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling readMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.readMemberStatus = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/status'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling readMemberStatus.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readMemberStatus.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberConnectionStatusResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.resumeMember = function (memberGuid, userGuid, body) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/resume'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling resumeMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling resumeMember.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling resumeMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "MemberResumeRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    MembersApi.prototype.updateMember = function (memberGuid, userGuid, body) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling updateMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling updateMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "MemberUpdateRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return MembersApi;
}());
exports.MembersApi = MembersApi;
var MerchantsApiApiKeys;
(function (MerchantsApiApiKeys) {
    MerchantsApiApiKeys[MerchantsApiApiKeys["apiKey"] = 0] = "apiKey";
    MerchantsApiApiKeys[MerchantsApiApiKeys["clientID"] = 1] = "clientID";
})(MerchantsApiApiKeys = exports.MerchantsApiApiKeys || (exports.MerchantsApiApiKeys = {}));
var MerchantsApi = (function () {
    function MerchantsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(MerchantsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MerchantsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    MerchantsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    MerchantsApi.prototype.setApiKey = function (key, value) {
        this.authentications[MerchantsApiApiKeys[key]].apiKey = value;
    };
    MerchantsApi.prototype.readMerchant = function (merchantGuid) {
        var localVarPath = this.basePath + '/merchants/{merchant_guid}'
            .replace('{' + 'merchant_guid' + '}', encodeURIComponent(String(merchantGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (merchantGuid === null || merchantGuid === undefined) {
            throw new Error('Required parameter merchantGuid was null or undefined when calling readMerchant.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MerchantResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return MerchantsApi;
}());
exports.MerchantsApi = MerchantsApi;
var StatementsApiApiKeys;
(function (StatementsApiApiKeys) {
    StatementsApiApiKeys[StatementsApiApiKeys["apiKey"] = 0] = "apiKey";
    StatementsApiApiKeys[StatementsApiApiKeys["clientID"] = 1] = "clientID";
})(StatementsApiApiKeys = exports.StatementsApiApiKeys || (exports.StatementsApiApiKeys = {}));
var StatementsApi = (function () {
    function StatementsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(StatementsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StatementsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    StatementsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    StatementsApi.prototype.setApiKey = function (key, value) {
        this.authentications[StatementsApiApiKeys[key]].apiKey = value;
    };
    StatementsApi.prototype.downloadStatementPdf = function (memberGuid, userGuid, statementGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/statements/{statement_guid}.pdf'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)))
            .replace('{' + 'statement_guid' + '}', encodeURIComponent(String(statementGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling downloadStatementPdf.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling downloadStatementPdf.');
        }
        if (statementGuid === null || statementGuid === undefined) {
            throw new Error('Required parameter statementGuid was null or undefined when calling downloadStatementPdf.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            encoding: null,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Buffer");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    StatementsApi.prototype.fetchStatements = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/fetch_statements'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling fetchStatements.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling fetchStatements.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    StatementsApi.prototype.listMemberStatements = function (memberGuid, userGuid, page, recordsPerPage) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/statements'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listMemberStatements.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listMemberStatements.');
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "StatementsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    StatementsApi.prototype.readMemberStatement = function (memberGuid, userGuid, statementGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/statements/{statement_guid}'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)))
            .replace('{' + 'statement_guid' + '}', encodeURIComponent(String(statementGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling readMemberStatement.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readMemberStatement.');
        }
        if (statementGuid === null || statementGuid === undefined) {
            throw new Error('Required parameter statementGuid was null or undefined when calling readMemberStatement.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "StatementResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return StatementsApi;
}());
exports.StatementsApi = StatementsApi;
var TransactionsApiApiKeys;
(function (TransactionsApiApiKeys) {
    TransactionsApiApiKeys[TransactionsApiApiKeys["apiKey"] = 0] = "apiKey";
    TransactionsApiApiKeys[TransactionsApiApiKeys["clientID"] = 1] = "clientID";
})(TransactionsApiApiKeys = exports.TransactionsApiApiKeys || (exports.TransactionsApiApiKeys = {}));
var TransactionsApi = (function () {
    function TransactionsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TransactionsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransactionsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    TransactionsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TransactionsApi.prototype.setApiKey = function (key, value) {
        this.authentications[TransactionsApiApiKeys[key]].apiKey = value;
    };
    TransactionsApi.prototype.cleanseAndCategorizeTransactions = function (body) {
        var localVarPath = this.basePath + '/cleanse_and_categorize';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling cleanseAndCategorizeTransactions.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "TransactionsCleanseAndCategorizeRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "TransactionsCleanseAndCategorizeResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    TransactionsApi.prototype.listUserTransactions = function (userGuid, page, fromDate, recordsPerPage, toDate) {
        var localVarPath = this.basePath + '/users/{user_guid}/transactions'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listUserTransactions.');
        }
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (fromDate !== undefined) {
            localVarQueryParameters['from_date'] = ObjectSerializer.serialize(fromDate, "string");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        if (toDate !== undefined) {
            localVarQueryParameters['to_date'] = ObjectSerializer.serialize(toDate, "string");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "TransactionsResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    TransactionsApi.prototype.readTransaction = function (transactionGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/transactions/{transaction_guid}'
            .replace('{' + 'transaction_guid' + '}', encodeURIComponent(String(transactionGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (transactionGuid === null || transactionGuid === undefined) {
            throw new Error('Required parameter transactionGuid was null or undefined when calling readTransaction.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readTransaction.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "TransactionResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TransactionsApi;
}());
exports.TransactionsApi = TransactionsApi;
var UsersApiApiKeys;
(function (UsersApiApiKeys) {
    UsersApiApiKeys[UsersApiApiKeys["apiKey"] = 0] = "apiKey";
    UsersApiApiKeys[UsersApiApiKeys["clientID"] = 1] = "clientID";
})(UsersApiApiKeys = exports.UsersApiApiKeys || (exports.UsersApiApiKeys = {}));
var UsersApi = (function () {
    function UsersApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(UsersApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsersApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    UsersApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    UsersApi.prototype.setApiKey = function (key, value) {
        this.authentications[UsersApiApiKeys[key]].apiKey = value;
    };
    UsersApi.prototype.createUser = function (body) {
        var localVarPath = this.basePath + '/users';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createUser.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "UserCreateRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UserResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    UsersApi.prototype.deleteUser = function (userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling deleteUser.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    UsersApi.prototype.listUsers = function (page, recordsPerPage) {
        var localVarPath = this.basePath + '/users';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (page !== undefined) {
            localVarQueryParameters['page'] = ObjectSerializer.serialize(page, "number");
        }
        if (recordsPerPage !== undefined) {
            localVarQueryParameters['records_per_page'] = ObjectSerializer.serialize(recordsPerPage, "number");
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UsersResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    UsersApi.prototype.readUser = function (userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling readUser.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UserResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    UsersApi.prototype.updateUser = function (userGuid, body) {
        var localVarPath = this.basePath + '/users/{user_guid}'
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling updateUser.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "UserUpdateRequestBody")
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UserResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return UsersApi;
}());
exports.UsersApi = UsersApi;
var VerificationApiApiKeys;
(function (VerificationApiApiKeys) {
    VerificationApiApiKeys[VerificationApiApiKeys["apiKey"] = 0] = "apiKey";
    VerificationApiApiKeys[VerificationApiApiKeys["clientID"] = 1] = "clientID";
})(VerificationApiApiKeys = exports.VerificationApiApiKeys || (exports.VerificationApiApiKeys = {}));
var VerificationApi = (function () {
    function VerificationApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
            'apiKey': new ApiKeyAuth('header', 'MX-API-Key'),
            'clientID': new ApiKeyAuth('header', 'MX-Client-ID'),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(VerificationApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VerificationApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: true,
        configurable: true
    });
    VerificationApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    VerificationApi.prototype.setApiKey = function (key, value) {
        this.authentications[VerificationApiApiKeys[key]].apiKey = value;
    };
    VerificationApi.prototype.listAccountNumbers = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/account_numbers'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling listAccountNumbers.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listAccountNumbers.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountNumbersResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    VerificationApi.prototype.listAccountNumbersByAccount = function (accountGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/accounts/{account_guid}/account_numbers'
            .replace('{' + 'account_guid' + '}', encodeURIComponent(String(accountGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (accountGuid === null || accountGuid === undefined) {
            throw new Error('Required parameter accountGuid was null or undefined when calling listAccountNumbersByAccount.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling listAccountNumbersByAccount.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "AccountNumbersResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    VerificationApi.prototype.verifyMember = function (memberGuid, userGuid) {
        var localVarPath = this.basePath + '/users/{user_guid}/members/{member_guid}/verify'
            .replace('{' + 'member_guid' + '}', encodeURIComponent(String(memberGuid)))
            .replace('{' + 'user_guid' + '}', encodeURIComponent(String(userGuid)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (memberGuid === null || memberGuid === undefined) {
            throw new Error('Required parameter memberGuid was null or undefined when calling verifyMember.');
        }
        if (userGuid === null || userGuid === undefined) {
            throw new Error('Required parameter userGuid was null or undefined when calling verifyMember.');
        }
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.apiKey.applyToRequest(localVarRequestOptions);
        this.authentications.clientID.applyToRequest(localVarRequestOptions);
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "MemberResponseBody");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return VerificationApi;
}());
exports.VerificationApi = VerificationApi;
var AtriumClient = (function () {
    function AtriumClient(apiKey, clientID) {
        this.mount('accounts', new AccountsApi(), apiKey, clientID);
        this.mount('connectWidget', new ConnectWidgetApi(), apiKey, clientID);
        this.mount('holdings', new HoldingsApi(), apiKey, clientID);
        this.mount('identity', new IdentityApi(), apiKey, clientID);
        this.mount('institutions', new InstitutionsApi(), apiKey, clientID);
        this.mount('members', new MembersApi(), apiKey, clientID);
        this.mount('merchants', new MerchantsApi(), apiKey, clientID);
        this.mount('statements', new StatementsApi(), apiKey, clientID);
        this.mount('transactions', new TransactionsApi(), apiKey, clientID);
        this.mount('users', new UsersApi(), apiKey, clientID);
        this.mount('verification', new VerificationApi(), apiKey, clientID);
    }
    AtriumClient.prototype.mount = function (label, val, apiKey, clientID) {
        val.setApiKey(0, apiKey);
        val.setApiKey(1, clientID);
        this[label] = val;
    };
    return AtriumClient;
}());
exports.AtriumClient = AtriumClient;
//# sourceMappingURL=atrium.js.map