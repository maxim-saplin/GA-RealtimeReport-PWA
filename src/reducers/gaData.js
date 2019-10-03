import { loop, Cmd } from 'redux-loop';
import * as actions from '../actions';

const gapi = window.gapi;

const rtRefreshMs = 3000;
const refreshMs = 12000;

function getRtData(viewId){
  return gapi.client.analytics.data.realtime.get({
    "ids": "ga:" + viewId,
    "metrics": "rt:activeUsers",
    "dimensions": "rt:country",
    "fields" : "rows,totalsForAllResults"
  })
  .then(function(response) {
    return {data: {usersNow: response.result.totalsForAllResults["rt:activeUsers"], countriesAndUsersNow: response.result.rows}, viewId};
  })
}

function getData(viewId){
  return gapi.client.analytics.data.ga.get({
    "ids": "ga:" + viewId,
    "start-date": "today",
    "end-date": "today",
    "metrics": "ga:users",
    "dimensions": "ga:country",
    "sort": "-ga:users",
    "fields" : "rows,totalsForAllResults"
  })
  .then(function(response) {
    return {data: {usersToday: response.result.totalsForAllResults["ga:users"], countriesAndUsersToday: response.result.rows}, viewId};
  })
}

let timeoutRt, timeout;

const gaData = (state = {usersNow: 0, usersToday: 0}, action) => {
  switch (action.type) {
    case actions.GA_GET_ALL_DATA:
        return loop(
          state,
          Cmd.list([
            Cmd.action({type: actions.GA_GET_RT_DATA, viewId: action.viewId}), 
            Cmd.action({type: actions.GA_GET_DATA, viewId: action.viewId})
          ])
        );

    case actions.GA_GET_RT_DATA:
      clearTimeout(timeoutRt);
      return loop(
        {...state, fetching: true},
          Cmd.run(() => getRtData(action.viewId), 
          {
            successActionCreator: actions.gaReceiveRtData
          })
      );
    case actions.GA_RECEIVE_RT_DATA:
        return loop(
          {...state, fetching: false, usersNow: action.data.usersNow, countriesAndUsersNow: action.data.countriesAndUsersNow},
          Cmd.run( 
            (dispatch, viewId) => {timeoutRt = setTimeout(() => dispatch(actions.gaGetRtData(viewId)), rtRefreshMs)}, 
            {args: [Cmd.dispatch, action.viewId]}) 
        );

    case actions.GA_GET_DATA:
      clearTimeout(timeout);
      return loop(
        {...state, fetching: true},
          Cmd.run(() => getData(action.viewId), 
          {
            successActionCreator: actions.gaReceiveData
          })
      );
    case actions.GA_RECEIVE_DATA:
        return loop(
          {...state, fetching: false, usersToday: action.data.usersToday, countriesAndUsersToday: action.data.countriesAndUsersToday},
          Cmd.run( 
            (dispatch, viewId) => {timeout = setTimeout(() => dispatch(actions.gaGetData(viewId)), refreshMs)}, 
            {args: [Cmd.dispatch, action.viewId]}) 
        );
    default:
      return state
  }
}

export default gaData;