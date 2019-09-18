import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');
export declare class Account {
    'apr'?: number;
    'apy'?: number;
    'availableBalance'?: number;
    'availableCredit'?: number;
    'balance'?: number;
    'cashBalance'?: number;
    'cashSurrenderValue'?: number;
    'createdAt'?: string;
    'creditLimit'?: number;
    'currencyCode'?: string;
    'dayPaymentIsDue'?: number;
    'deathBenefit'?: number;
    'guid'?: string;
    'holdingsValue'?: number;
    'institutionCode'?: string;
    'interestRate'?: number;
    'isClosed'?: boolean;
    'lastPayment'?: number;
    'loanAmount'?: number;
    'maturesOn'?: string;
    'memberGuid'?: string;
    'minimumBalance'?: number;
    'minimumPayment'?: number;
    'name'?: string;
    'originalBalance'?: number;
    'paymentDueAt'?: string;
    'payoffBalance'?: number;
    'startedOn'?: string;
    'subtype'?: string;
    'totalAccountValue'?: number;
    'type'?: string;
    'updatedAt'?: string;
    'userGuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountNumber {
    'accountGuid'?: string;
    'accountNumber'?: string;
    'memberGuid'?: string;
    'routingNumber'?: string;
    'userGuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountNumbersResponseBody {
    'accountNumbers'?: Array<AccountNumber>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountOwner {
    'accountGuid'?: string;
    'address'?: string;
    'city'?: string;
    'country'?: string;
    'email'?: string;
    'guid'?: string;
    'memberGuid'?: string;
    'ownerName'?: string;
    'postalCode'?: string;
    'state'?: string;
    'userGuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountOwnersResponseBody {
    'accountOwners'?: Array<AccountOwner>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountResponseBody {
    'account'?: Account;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class AccountsResponseBody {
    'accounts'?: Array<Account>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Challenge {
    'fieldName'?: string;
    'guid'?: string;
    'imageData'?: string;
    'label'?: string;
    'options'?: Array<ChallengeOption>;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ChallengeOption {
    'imageData'?: string;
    'label'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ChallengesResponseBody {
    'challenges'?: Array<Challenge>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ConnectWidget {
    'connectWidgetUrl'?: string;
    'guid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ConnectWidgetRequestBody {
    'isMobileWebview'?: boolean;
    'currentInstitutionCode'?: string;
    'currentMemberGuid'?: string;
    'updateCredentials'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class ConnectWidgetResponseBody {
    'user'?: ConnectWidget;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CredentialOption {
    'label'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CredentialRequest {
    'guid'?: string;
    'value'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CredentialResponse {
    'fieldName'?: string;
    'guid'?: string;
    'label'?: string;
    'options'?: Array<CredentialOption>;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class CredentialsResponseBody {
    'credentials'?: Array<CredentialResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Holding {
    'accountGuid'?: string;
    'costBasis'?: number;
    'createdAt'?: string;
    'currencyCode'?: string;
    'cusip'?: string;
    'dailyChange'?: number;
    'description'?: string;
    'guid'?: string;
    'holdingType'?: string;
    'marketValue'?: number;
    'memberGuid'?: string;
    'purchasePrice'?: number;
    'shares'?: number;
    'symbol'?: string;
    'updatedAt'?: string;
    'userGuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class HoldingResponseBody {
    'holding'?: Holding;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class HoldingsResponseBody {
    'holdings'?: Array<Holding>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Institution {
    'code'?: string;
    'mediumLogoUrl'?: string;
    'name'?: string;
    'smallLogoUrl'?: string;
    'supportsAccountIdentification'?: boolean;
    'supportsAccountStatement'?: boolean;
    'supportsAccountVerification'?: boolean;
    'supportsTransactionHistory'?: boolean;
    'url'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InstitutionResponseBody {
    'institution'?: Institution;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class InstitutionsResponseBody {
    'institutions'?: Array<Institution>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Member {
    'aggregatedAt'?: string;
    'connectionStatus'?: string;
    'guid'?: string;
    'identifier'?: string;
    'institutionCode'?: string;
    'isBeingAggregated'?: boolean;
    'metadata'?: string;
    'name'?: string;
    'status'?: string;
    'successfullyAggregatedAt'?: string;
    'userGuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberConnectionStatus {
    'aggregatedAt'?: string;
    'challenges'?: Array<Challenge>;
    'connectionStatus'?: string;
    'guid'?: string;
    'hasProcessedAccounts'?: boolean;
    'hasProcessedTransactions'?: boolean;
    'isBeingAggregated'?: boolean;
    'status'?: string;
    'successfullyAggregatedAt'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberConnectionStatusResponseBody {
    'member'?: MemberConnectionStatus;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberCreateRequest {
    'credentials': Array<CredentialRequest>;
    'identifier'?: string;
    'institutionCode': string;
    'metadata'?: string;
    'skipAggregation'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberCreateRequestBody {
    'member'?: MemberCreateRequest;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberResponseBody {
    'member'?: Member;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberResumeRequest {
    'challenges'?: Array<CredentialRequest>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberResumeRequestBody {
    'member'?: MemberResumeRequest;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberUpdateRequest {
    'credentials'?: Array<CredentialRequest>;
    'identifier'?: string;
    'metadata'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MemberUpdateRequestBody {
    'member'?: MemberUpdateRequest;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MembersResponseBody {
    'members'?: Array<Member>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Merchant {
    'createdAt'?: string;
    'guid'?: string;
    'logoUrl'?: string;
    'name'?: string;
    'updatedAt'?: string;
    'websiteUrl'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class MerchantResponseBody {
    'merchant'?: Merchant;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Pagination {
    'currentPage'?: number;
    'perPage'?: number;
    'totalEntries'?: number;
    'totalPages'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Statement {
    'accountGuid'?: string;
    'contentHash'?: string;
    'createdAt'?: string;
    'guid'?: string;
    'memberGuid'?: string;
    'uri'?: string;
    'userGuid'?: string;
    'updatedAt'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class StatementResponseBody {
    'user'?: Statement;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class StatementsResponseBody {
    'statements'?: Array<Statement>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class Transaction {
    'accountGuid'?: string;
    'amount'?: number;
    'category'?: string;
    'checkNumber'?: number;
    'checkNumberString'?: string;
    'createdAt'?: string;
    'currencyCode'?: string;
    'date'?: string;
    'description'?: string;
    'guid'?: string;
    'isBillPay'?: boolean;
    'isDirectDeposit'?: boolean;
    'isExpense'?: boolean;
    'isFee'?: boolean;
    'isIncome'?: boolean;
    'isInternational'?: boolean;
    'isOverdraftFee'?: boolean;
    'isPayrollAdvance'?: boolean;
    'latitude'?: number;
    'longitude'?: number;
    'memberGuid'?: string;
    'memo'?: string;
    'merchantCategoryCode'?: number;
    'merchantGuid'?: string;
    'originalDescription'?: string;
    'postedAt'?: string;
    'status'?: string;
    'topLevelCategory'?: string;
    'transactedAt'?: string;
    'type'?: string;
    'updatedAt'?: string;
    'userGuid'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionCleanseAndCategorizeRequest {
    'amount'?: number;
    'description'?: string;
    'identifier'?: string;
    'type'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionCleanseAndCategorizeResponse {
    'amount'?: number;
    'category'?: string;
    'description'?: string;
    'identifier'?: string;
    'type'?: string;
    'isBillPay'?: boolean;
    'isDirectDeposit'?: boolean;
    'isExpense'?: boolean;
    'isFee'?: boolean;
    'isIncome'?: boolean;
    'isInternational'?: boolean;
    'isOverdraftFee'?: boolean;
    'isPayrollAdvance'?: boolean;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionResponseBody {
    'transaction'?: Transaction;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionsCleanseAndCategorizeRequestBody {
    'transactions'?: Array<TransactionCleanseAndCategorizeRequest>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionsCleanseAndCategorizeResponseBody {
    'transactions'?: Array<TransactionCleanseAndCategorizeResponse>;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class TransactionsResponseBody {
    'transactions'?: Array<Transaction>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class User {
    'guid'?: string;
    'identifier'?: string;
    'isDisabled'?: boolean;
    'metadata'?: string;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserCreateRequestBody {
    'user'?: User;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserResponseBody {
    'user'?: User;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UserUpdateRequestBody {
    'user'?: User;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare class UsersResponseBody {
    'users'?: Array<User>;
    'pagination'?: Pagination;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare enum AccountsApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class AccountsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: AccountsApiApiKeys, value: string): void;
    listAccountTransactions(accountGuid: string, userGuid: string, fromDate?: string, toDate?: string, page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: TransactionsResponseBody;
    }>;
    listUserAccounts(userGuid: string, page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: AccountsResponseBody;
    }>;
    readAccount(accountGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: AccountResponseBody;
    }>;
    readAccountByMemberGUID(accountGuid: string, memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: AccountResponseBody;
    }>;
}
export declare enum ConnectWidgetApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class ConnectWidgetApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ConnectWidgetApiApiKeys, value: string): void;
    getConnectWidget(userGuid: string, body: ConnectWidgetRequestBody): Promise<{
        response: http.IncomingMessage;
        body: ConnectWidgetResponseBody;
    }>;
}
export declare enum HoldingsApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class HoldingsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: HoldingsApiApiKeys, value: string): void;
    listHoldings(userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: HoldingsResponseBody;
    }>;
    listHoldingsByAccount(accountGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: HoldingsResponseBody;
    }>;
    listHoldingsByMember(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: HoldingsResponseBody;
    }>;
    readHolding(holdingGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: HoldingResponseBody;
    }>;
}
export declare enum IdentityApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class IdentityApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: IdentityApiApiKeys, value: string): void;
    identifyMember(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    listAccountOwners(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: AccountOwnersResponseBody;
    }>;
}
export declare enum InstitutionsApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class InstitutionsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: InstitutionsApiApiKeys, value: string): void;
    listInstitutions(name?: string, page?: number, recordsPerPage?: number, supportsAccountIdentification?: boolean, supportsAccountStatement?: boolean, supportsAccountVerification?: boolean, supportsTransactionHistory?: boolean): Promise<{
        response: http.IncomingMessage;
        body: InstitutionsResponseBody;
    }>;
    readInstitution(institutionCode: string): Promise<{
        response: http.IncomingMessage;
        body: InstitutionResponseBody;
    }>;
    readInstitutionCredentials(institutionCode: string): Promise<{
        response: http.IncomingMessage;
        body: CredentialsResponseBody;
    }>;
}
export declare enum MembersApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class MembersApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: MembersApiApiKeys, value: string): void;
    aggregateMember(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    createMember(userGuid: string, body: MemberCreateRequestBody): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    deleteMember(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    extendHistory(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    listMemberAccounts(memberGuid: string, userGuid: string, page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: AccountsResponseBody;
    }>;
    listMemberCredentials(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: CredentialsResponseBody;
    }>;
    listMemberMFAChallenges(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: ChallengesResponseBody;
    }>;
    listMemberTransactions(memberGuid: string, userGuid: string, fromDate?: string, toDate?: string, page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: TransactionsResponseBody;
    }>;
    listMembers(userGuid: string, page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: MembersResponseBody;
    }>;
    readMember(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    readMemberStatus(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberConnectionStatusResponseBody;
    }>;
    resumeMember(memberGuid: string, userGuid: string, body: MemberResumeRequestBody): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    updateMember(memberGuid: string, userGuid: string, body?: MemberUpdateRequestBody): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
}
export declare enum MerchantsApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class MerchantsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: MerchantsApiApiKeys, value: string): void;
    readMerchant(merchantGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MerchantResponseBody;
    }>;
}
export declare enum StatementsApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class StatementsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: StatementsApiApiKeys, value: string): void;
    downloadStatementPdf(memberGuid: string, userGuid: string, statementGuid: string): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    fetchStatements(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
    listMemberStatements(memberGuid: string, userGuid: string, page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: StatementsResponseBody;
    }>;
    readMemberStatement(memberGuid: string, userGuid: string, statementGuid: string): Promise<{
        response: http.IncomingMessage;
        body: StatementResponseBody;
    }>;
}
export declare enum TransactionsApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class TransactionsApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TransactionsApiApiKeys, value: string): void;
    cleanseAndCategorizeTransactions(body: TransactionsCleanseAndCategorizeRequestBody): Promise<{
        response: http.IncomingMessage;
        body: TransactionsCleanseAndCategorizeResponseBody;
    }>;
    listUserTransactions(userGuid: string, page?: number, fromDate?: string, recordsPerPage?: number, toDate?: string): Promise<{
        response: http.IncomingMessage;
        body: TransactionsResponseBody;
    }>;
    readTransaction(transactionGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: TransactionResponseBody;
    }>;
}
export declare enum UsersApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class UsersApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: UsersApiApiKeys, value: string): void;
    createUser(body: UserCreateRequestBody): Promise<{
        response: http.IncomingMessage;
        body: UserResponseBody;
    }>;
    deleteUser(userGuid: string): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    listUsers(page?: number, recordsPerPage?: number): Promise<{
        response: http.IncomingMessage;
        body: UsersResponseBody;
    }>;
    readUser(userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: UserResponseBody;
    }>;
    updateUser(userGuid: string, body?: UserUpdateRequestBody): Promise<{
        response: http.IncomingMessage;
        body: UserResponseBody;
    }>;
}
export declare enum VerificationApiApiKeys {
    apiKey = 0,
    clientID = 1
}
export declare class VerificationApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        'default': Authentication;
        'apiKey': ApiKeyAuth;
        'clientID': ApiKeyAuth;
    };
    constructor(basePath?: string);
    useQuerystring: boolean;
    basePath: string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: VerificationApiApiKeys, value: string): void;
    listAccountNumbers(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: AccountNumbersResponseBody;
    }>;
    listAccountNumbersByAccount(accountGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: AccountNumbersResponseBody;
    }>;
    verifyMember(memberGuid: string, userGuid: string): Promise<{
        response: http.IncomingMessage;
        body: MemberResponseBody;
    }>;
}
export declare class AtriumClient {
    constructor(apiKey: string, clientID: string);
    mount(label: keyof AtriumClient, val: any, apiKey: string, clientID: string): void;
    accounts: AccountsApi;
    connectWidget: ConnectWidgetApi;
    holdings: HoldingsApi;
    identity: IdentityApi;
    institutions: InstitutionsApi;
    members: MembersApi;
    merchants: MerchantsApi;
    statements: StatementsApi;
    transactions: TransactionsApi;
    users: UsersApi;
    verification: VerificationApi;
}
