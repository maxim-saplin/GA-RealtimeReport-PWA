import { loop, Cmd } from 'redux-loop';
import * as actions from '../actions';

function resumeGaDataRetrieval(dispatch, getState){
  var auth = getState().auth;

  if (auth && auth.currentAccount && auth.currentAccount.viewId){
    dispatch(actions.authorizeAuto());
    dispatch(actions.gaGetRtData(auth.currentAccount.viewId));
    dispatch(actions.gaGetData(auth.currentAccount.viewId));
  }
}

const network = (state = {online: navigator.onLine}, action) => {
  switch (action.type) {
    case actions.NETWORK_ONLINE:
        return loop(
          {...state, online: true},
          Cmd.run( 
            resumeGaDataRetrieval, 
            {args: [Cmd.dispatch, Cmd.getState]}) 
        );
    case actions.NETWORK_OFFLINE:
      return {...state, online: false}
    case actions.NETWORK_LASTFETCH:
        return {...state, lastFetch: action.lastFetch}
    default:
        return state
  }
}

export default network;