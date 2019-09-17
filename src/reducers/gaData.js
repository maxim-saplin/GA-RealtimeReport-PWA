import * as actions from '../actions';

const gaData = (state = {usersNow: 0, usersToday: 0}, action) => {
  switch (action.type) {
    case actions.GA_GET_BATCHED_DATA:
      return {... state, online: true}
    case actions.GA_GET_BATCHED_DATA:
      return {... state, online: true}
    default:
        return state
  }
}

export default gaData;