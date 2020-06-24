import * as actions from '../actions';

const service = (state = {}, action) => {
  let serializedState = undefined;
  switch (action.type) {
    case actions.SERVICE_LOAD_STATE:
      serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return state;
      }
      const s = JSON.parse(serializedState);    
      if (s.network.lastFetch) s.network.lastFetch  = new Date(s.network.lastFetch);
      return s;
    case actions.SERVICE_PERSIST_STATE:
      serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
      return state;
    default:
        return state
  }
}

export default service;