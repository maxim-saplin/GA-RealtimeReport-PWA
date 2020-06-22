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
//           lastFetch: null
//     },
//     gaData: {
//         usersNow: 0,
//         countries: []
//         usersToday: 0
//         fetching: false
//     }
// }

import {combineReducers, reduceReducers} from 'redux-loop';
import auth from './auth';
import network from './network';
import gaData from './gaData';
import service from './service';

export default reduceReducers(service, combineReducers({auth, gaData, network}));