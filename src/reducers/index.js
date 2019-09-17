// STATE MAP

// s = {
//     auth: {
//         authorized: false,
//         authorizing: false,
//         currentAccount:
//         {
//             accountId: "",
//             propertyId: "",
//             viewId: ""
//         },
//         availableAccounts: []
//     },
//     network : {
//         online: true,
//         lastUpdated: null,
//         updatePeriodMs: 2000
//     },
//     gaData: {
//         usersNow: 0,
//         usersToday: 0
//         fetching: false
//     }
// }

import { loop, Cmd, combineReducers } from 'redux-loop';
import auth from './auth';
import network from './network';


export default combineReducers({auth, network});