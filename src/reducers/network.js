import * as actions from '../actions';

const network = (state = {online: true}, action) => {
  switch (action.type) {
    case actions.NETWORK_ONLINE:
        return {... state, online: true}
    case actions.NETWORK_OFFLINE:
      return {... state, online: false}
    default:
        return state
  }
}

export default network;