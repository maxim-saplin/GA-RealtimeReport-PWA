export const AUTHORIZE_AUTO = 'AUTHORIZE_AUTO';
export const AUTHORIZE_MANUAL = 'AUTHORIZE_MANUAL';
export const AUTHORIZE_SINGOUT = 'AUTHORIZE_SINGOUT';
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';
export const AUTHORIZATION_OK = 'AUTHORIZATION_OK';

export const AUTH_GET_ACCOUNTS = 'AUTH_GET_ACCOUNTS';
export const AUTH_RECEIVE_ACCOUNTS = 'AUTH_RECEIVE_ACCOUNTS';
export const AUTH_CHOOSE_ACCOUNT = 'AUTH_CHOOSE_ACCOUNT';

export const GA_SET_PROFILE_ID = 'GA_SET_PROFILE_ID';
export const GA_GET_BATCHED_DATA= 'GA_GET_USERS_NOW';
export const GA_GET_RECEIVE_DATA= 'GA_GET_RECEIVE_DATA';

export const NETWORK_ONLINE= 'NETWORK_ONLINE';
export const NETWORK_OFFLINE= 'NETWORK_OFFLINE';

export const authorizeAuto = () => ({type: AUTHORIZE_AUTO});
export const authorizeManual = () => ({type: AUTHORIZE_MANUAL});
export const authorizeSingout = () => ({type: AUTHORIZE_SINGOUT});
export const authorizationFailed = (autoMode) => ({type: AUTHORIZATION_FAILED, autoMode});
export const authorizationOk = () => ({type: AUTHORIZATION_OK});

export const authGetAccounts = () => ({type: AUTH_GET_ACCOUNTS});
export const authReceiveAccounts = (accounts) => ({type: AUTH_RECEIVE_ACCOUNTS, accounts});
export const authChooseAccount = (account) => ({type: AUTH_CHOOSE_ACCOUNT, account});

export const gaGetBatchedData = () => ({type: GA_GET_BATCHED_DATA});
export const gaReceiveBatchedData = () => ({type: GA_GET_RECEIVE_DATA});

export const networkOnline = () => ({type: NETWORK_ONLINE});
export const networkOffline = () => ({type: NETWORK_OFFLINE});