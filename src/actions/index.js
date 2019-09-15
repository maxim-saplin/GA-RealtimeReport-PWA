export const AUTHORIZE_AUTO = 'AUTHORIZE_AUTO'
export const AUTHORIZE_MANUAL = 'AUTHORIZE_MANUAL'
export const AUTHORIZATION_FAILED = 'AUTHORIZATION_FAILED'
export const AUTHORIZATION_OK = 'AUTHORIZATION_OK'
export const AUTH_GET_ACCOUNTS = 'AUTH_GET_ACCOUNTS'
export const AUTH_CHOOSE_ACCOUNT = 'AUTH_CHOOSE_ACCOUNT'
export const AUTH_CHOOSE_PROPERTY = 'AUTH_CHOOSE_PROPERTY'
export const AUTH_CHOOSE_VIEW = 'AUTH_CHOOSE_VIEW'
export const GA_GET_USERS_NOW= 'GA_GET_USERS_NOW'

export const authorizeAuto = () => ({type: AUTHORIZE_AUTO})
export const authorizeManual = () => ({type: AUTHORIZE_MANUAL})
export const authorizationFailed = (autoMode) => ({type: AUTHORIZATION_FAILED, autoMode})
export const authorizationOk= () => ({type: AUTHORIZATION_OK})