import { loop, Cmd } from 'redux-loop';
import * as actions from '../actions';

const gapi = window.gapi;

function getRtData(viewId){
  return gapi.client.analytics.data.realtime.get({
    "ids": "ga:" + viewId,
    "metrics": "rt:activeUsers",
    "dimensions": "rt:country",
    "fields" : "rows,totalsForAllResults"
  })
  .then(function(response) {
    return {data: {usersNow: response.result.totalsForAllResults["rt:activeUsers"], countriesAndUsers: response.result.rows}, viewId};
  })
}

//let prevViewId;
let timeout;

const gaData = (state = {usersNow: 0, usersToday: 0}, action) => {
  switch (action.type) {
    case actions.GA_GET_RT_DATA:
      clearTimeout(timeout);
      //prevViewId = action.viewId;
      return loop(
        {...state, fetching: true},
          Cmd.run(() => getRtData(action.viewId), 
          {
            successActionCreator: actions.gaReceiveRtData
          })
      );
    case actions.GA_RECEIVE_RT_DATA:
        return loop(
          {... state, fetching: false, usersNow: action.data.usersNow, countriesAndUsers: action.data.countriesAndUsers},
          Cmd.run( 
            (dispatch, viewId) => {timeout = setTimeout(() => dispatch(actions.gaGetRtData(viewId)), 3000)}, 
            {args: [Cmd.dispatch, action.viewId]}) 
        );
    default:
      return state
  }
}

export default gaData;