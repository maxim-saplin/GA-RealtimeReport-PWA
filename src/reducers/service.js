import * as actions from '../actions';

const service = (state = {}, action) => {
  let serializedState = undefined;
  switch (action.type) {
    case actions.SERVICE_LOAD_STATE:
      serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return state;
      }
      return JSON.parse(serializedState);    
    case actions.SERVICE_PERSIST_STATE:
      serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
      return state;
    default:
        return state
  }
}

export default service;