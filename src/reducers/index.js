// STATE MAP
// s = {
//     auth: {
//         authorized: false,
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

import { combineReducers } from 'redux'

const auth = (state = {authorized: false}, action) => {
    switch (action.type) {
      default:
        return state
    }
  }

  export default combineReducers({auth});