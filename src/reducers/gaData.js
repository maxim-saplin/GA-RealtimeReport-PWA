import { loop, Cmd } from 'redux-loop';
import * as actions from '../actions';

const rtRefreshMs = 3000;
const refreshMs = 12000;

function getRtData(viewId){
  return window.gapi.client.analytics.data.realtime.get({
    "ids": "ga:" + viewId,
    "metrics": "rt:activeUsers",
    "dimensions": "rt:country",
    "fields" : "rows,totalsForAllResults"
  })
  .then(function(response) {
    return {data: {usersNow: response.result.totalsForAllResults["rt:activeUsers"], countriesAndUsersNow: response.result.rows}, viewId};
  })
  .catch(function (error) { 
    if (error.status === 401) return {reAuth: true, viewId}; // indicate that auth refresh is required

    console.log("GA RT error: "+error.status);
  });
}

function getData(viewId){
  return window.gapi.client.analytics.data.ga.get({
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
  .catch(function (error) {
    if (error.status === 401) return {reAuth: true, viewId}; // indicate that auth refresh is required
    
    console.log("GA error: "+error.status);
  });
}

let timeoutRt, timeout;

const gaData = (state = {usersNow: 0, usersToday: 0}, action) => {

  //GA fetch returned authorization error, might be an issue with auth token being invalidated. Repeat autherization and restart data fetching
  if (action.type === actions.GA_RECEIVE_RT_DATA || action.type === actions.GA_RECEIVE_DATA) {
    if (action.reAuth && action.reAuth === true){
      return loop(
        {...state, fetching: false},
        Cmd.list([
          Cmd.action({type: actions.AUTHORIZE_REFRESH_TOKEN, viewId: action.viewId})
        ])
      );    
    }
  }
  
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
      const getRt = Cmd.run( 
        (dispatch, viewId) => {timeoutRt = setTimeout(() => dispatch(actions.gaGetRtData(viewId)), rtRefreshMs)}, 
        {args: [Cmd.dispatch, action.viewId]});

      const networkFetch = Cmd.action(actions.networkLastFetch(new Date()));
    
      return loop(
          {...state, fetching: false, usersNow: action.data.usersNow, countriesAndUsersNow: action.data.countriesAndUsersNow},
          Cmd.list([
            getRt,
            networkFetch])
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