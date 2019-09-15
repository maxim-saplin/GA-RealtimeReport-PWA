// STATE MAP
// s = {
//     auth: {
//         authorized: false,
//         authorizing: false,
//         currentAccount:
//         {
//             authorized: false,
//             account: "",
//             property: "",
//             view: ""
//         },
//         availableAccounts: []
//     },
//     network : {
//         online: false,
//         lastUpdated: null,
//         updatePeriodMs: 2000
//     },
//     gaData: {
//         usersNow: 0
//     }
// }

//import { combineReducers } from 'redux';
import { loop, Cmd, combineReducers } from 'redux-loop';
import * as actions from '../actions';

let CLIENT_ID = '48841825057-engcdce3j4sfo5j5v4pc3hrpe9fgv1mu.apps.googleusercontent.com';
let SCOPES = ['https://www.googleapis.com/auth/analytics.readonly'];
let gapi = window.gapi;

function authorize(useImmdiate) {
  let authData = {
    client_id: CLIENT_ID,
    scope: SCOPES,
    immediate: useImmdiate
  };

  gapi.auth.authorize(authData, function(response) {
    let authButton = document.getElementById('auth-button');
    if (response.error) {
      // authButton.hidden = false;
      throw "GAPI - Authorization failed"
    }
    else {
      // authButton.hidden = true;
      // queryAccounts();
    }
  });
}

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
        case actions.authorizationOk:
          return {...state, authorized: true, authorizing: false};
        case actions.authorizationFailed:
          return {...state, authorized: false, authorizing: false};
      default:
        return state
    }
  }

export default combineReducers({auth});