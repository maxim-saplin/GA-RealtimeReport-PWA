import { loop, Cmd } from 'redux-loop';
import * as actions from '../actions';

const gapi = window.gapi;

function getRtData(viewId){
  return gapi.client.analytics.data.realtime.get({
    'ids': 'ga:' + viewId,
    'metrics': 'rt:activeUsers',
    //'fields' : 'totalsForAllResults'
  })
  .then(function(response) {
    return response.result.totalsForAllResults["rt:activeUsers"];
  })
}

const gaData = (state = {usersNow: 0, usersToday: 0}, action) => {
  switch (action.type) {
    case actions.GA_GET_RT_DATA:
      return loop(
        {...state, fetching: true},
          Cmd.run(() => getRtData(action.viewId), 
          {
            successActionCreator: actions.gaReceiveRtData,
          })
      );
    case actions.GA_RECEIVE_RT_DATA:
      return {... state, fetching: false, usersNow: action.data}
    default:
      return state
  }
}

export default gaData;