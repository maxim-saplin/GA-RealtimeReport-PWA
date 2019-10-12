import React from 'react';
import { createStore } from 'redux'
import { install } from 'redux-loop';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ConditionalRoute from './misc/ConditionalRoute';
import rootReducer from './reducers';
import AccountSelection from './containers/AccountSelection';
import Navigation from './containers/Navigation';
import Status from './containers/Status';
import UsersNow from './containers/UsersNow';
import UsersToday from './containers/UsersToday';

const store = createStore(rootReducer, {}, install());
window.dispatch = store.dispatch;

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route component={Navigation}/>
          <Route exact path="/auth" component={AccountSelection} />
          <div id="columns">
            <ConditionalRoute exact path="/" component={UsersNow} conditionEval={() => store.getState().auth.authorized} />
            <ConditionalRoute exact path="/" component={UsersToday} conditionEval={() => store.getState().auth.authorized} />
          </div>
        </Router>
        <Status />
      </Provider>
    </div>
  );
}