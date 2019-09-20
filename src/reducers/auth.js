import { loop, Cmd } from 'redux-loop';
import * as actions from '../actions';

const CLIENT_ID = '48841825057-engcdce3j4sfo5j5v4pc3hrpe9fgv1mu.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];
const gapi = window.gapi;

function authorize(useImmdiate) {
  const authData = {
    client_id: CLIENT_ID,
    scope: SCOPES,
    immediate: useImmdiate
  };

  return gapi.auth.authorize(authData, function(response) {
    if (response.error) {
      throw new Error("GAPI - Authorization failed");
    }
  });
}

function getAccounts(){
  return gapi.client.load('analytics', 'v3').then(() => {
    return gapi.client.analytics.management.accounts.list().then(
      response => {
        if (response.result.items && response.result.items.length) {

          let accs = response.result.items.map(i => ({id: i.id, name: i.name}));
          
          return gapi.client.analytics.management.webproperties.list(
            {"accountId": "~all"})
          .then(
            response => {
              if (response.result.items && response.result.items.length) {
                accs.forEach(a => {
                  a.properties = response.result.items.filter(p => p.accountId === a.id).map(p => ({id: p.id, name: p.name}));
                });

                return gapi.client.analytics.management.profiles.list({
                    "accountId": "~all",
                    "webPropertyId": "~all"
                  })
                  .then(
                    response => {
                      if (response.result.items && response.result.items.length) {
                        accs.forEach(a => {
                          a.properties.forEach(p => {
                            p.views = response.result.items.filter(v => v.webPropertyId === p.id).map(v => ({id: v.id, name: v.name}));
                          });
                        });

                        return accs;
                      }  
                    });
              }
            }
          );

        } else {
          console.log('No accounts found for this user.');
        }
     }
    );
  });
}

let prevViewId;

const auth = (state = {authorized: false, authorizing: false}, action) => {
    switch (action.type) {

      case actions.AUTHORIZE_AUTO:
      case actions.AUTHORIZE_MANUAL:
        return loop(
          {...state, authorizing: true},
            Cmd.run(() => authorize(action.type === actions.AUTHORIZE_AUTO), 
            {
              successActionCreator: actions.authorizationOk,
              failActionCreator: actions.authorizationFailed,
              args: [action.type === actions.AUTHORIZE_AUTO]
            })
        );

      case actions.AUTHORIZATION_OK:
        return loop(
          {...state, authorized: true, authorizing: false},
          Cmd.action({type: actions.AUTH_GET_ACCOUNTS})
          //Cmd.run( (dispatch) => dispatch(actions.authGetAccounts()), {args: [Cmd.dispatch]})
        );

      case actions.AUTHORIZATION_FAILED:
        return {...state, authorized: false, authorizing: false};

      case actions.AUTHORIZE_SINGOUT:
          return loop(
            {...state, authorized: false, authorizing: false},
            Cmd.run( () => {gapi.auth.setToken(null); gapi.auth.signOut()})
          );

      case actions.AUTH_GET_ACCOUNTS:
        return loop(  
          state,
          Cmd.run(() => getAccounts(), 
            {
              successActionCreator: actions.authReceiveAccounts
            })
          );

      case actions.AUTH_RECEIVE_ACCOUNTS:
        return {...state, availableAccounts: action.accounts};

      case actions.AUTH_CHOOSE_ACCOUNT:
        let flag = false;  
        if (action.account.viewId && prevViewId !== action.account.viewId) {
          flag = true;
          prevViewId = action.account.viewId;
        }
        if (flag){
          return loop(
            {...state, currentAccount: action.account},
            Cmd.action({type: actions.GA_GET_RT_DATA, viewId: action.account.viewId})
          );
        }
        return {...state, currentAccount: action.account};

      default:
        return state
    }
}

export default auth;