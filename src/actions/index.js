export const AUTHORIZE_AUTO = 'AUTHORIZE_AUTO';
export const AUTHORIZE_MANUAL = 'AUTHORIZE_MANUAL';
export const AUTHORIZE_SINGOUT = 'AUTHORIZE_SINGOUT';
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED';
export const AUTHORIZATION_OK = 'AUTHORIZATION_OK';
export const AUTHORIZE_REFRESH_TOKEN = 'AUTHORIZE_REFRESH_TOKEN';

export const AUTH_GET_ACCOUNTS = 'AUTH_GET_ACCOUNTS';
export const AUTH_RECEIVE_ACCOUNTS = 'AUTH_RECEIVE_ACCOUNTS';
export const AUTH_CHOOSE_ACCOUNT = 'AUTH_CHOOSE_ACCOUNT';

export const GA_GET_ALL_DATA = 'GA_GET_ALL_DATA';
//Realtime
export const GA_GET_RT_DATA = 'GA_GET_RT_DATA';
export const GA_RECEIVE_RT_DATA = 'GA_RECEIVE_RT_DATA';
export const GA_RECEIVE_RT_ERROR = 'GA_RECEIVE_RT_ERROR';
// Not realtime
export const GA_GET_DATA = 'GA_GET_DATA';
export const GA_RECEIVE_DATA = 'GA_RECEIVE_DATA';
export const GA_RECEIVE_ERROR = 'GA_RECEIVE_ERROR';

export const NETWORK_ONLINE= 'NETWORK_ONLINE';
export const NETWORK_OFFLINE= 'NETWORK_OFFLINE';

export const authorizeAuto = () => ({type: AUTHORIZE_AUTO});
export const authorizeManual = () => ({type: AUTHORIZE_MANUAL});
export const authorizeSingout = () => ({type: AUTHORIZE_SINGOUT});
export const authorizationFailed = (autoMode) => ({type: AUTHORIZATION_FAILED, autoMode});
export const authorizationOk = () => ({type: AUTHORIZATION_OK});
export const authorizationRefreshToken = (viewId) => ({type: AUTHORIZE_REFRESH_TOKEN, viewId});

export const authGetAccounts = () => ({type: AUTH_GET_ACCOUNTS});
export const authReceiveAccounts = (accounts) => ({type: AUTH_RECEIVE_ACCOUNTS, accounts});
export const authChooseAccount = (account) => ({type: AUTH_CHOOSE_ACCOUNT, account});

export const gaGetAllData = (viewId) => ( {type: GA_GET_ALL_DATA, viewId} );
export const gaGetRtData = (viewId) => ({type: GA_GET_RT_DATA, viewId});
export const gaReceiveRtData = ({data, viewId, reAuth}) => ({type: GA_RECEIVE_RT_DATA, data, viewId, reAuth});
export const gaReceiveRtError = (error) => ({type: GA_RECEIVE_RT_DATA, error});
export const gaGetData = (viewId) => ({type: GA_GET_DATA, viewId});
export const gaReceiveData = ({data, viewId, reAuth}) => ({type: GA_RECEIVE_DATA, data, viewId, reAuth});
export const gaReceiveError = (error) => ({type: GA_RECEIVE_DATA, error});


export const networkOnline = () => ({type: NETWORK_ONLINE});
export const networkOffline = () => ({type: NETWORK_OFFLINE});