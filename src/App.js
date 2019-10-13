import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ConditionalRoute from './misc/ConditionalRoute';
import AccountSelection from './containers/AccountSelection';
import Navigation from './containers/Navigation';
import Status from './containers/Status';
import UsersNow from './containers/UsersNow';
import UsersToday from './containers/UsersToday';

let basename = "/";

if (process.env.PUBLIC_URL) {
  basename = process.env.PUBLIC_URL;
}

export default function App() {
  return (
    <div className="App">
      <Provider store={window.store}>
        <Router basename={basename}>
          <Route component={Navigation}/>
          <Route exact path="/auth" component={AccountSelection} />
          <div id="columns">
            <ConditionalRoute exact path="/" component={UsersNow} conditionEval={() => window.store.getState().auth.authorized} />
            <ConditionalRoute exact path="/" component={UsersToday} conditionEval={() => window.store.getState().auth.authorized} />
          </div>
        </Router>
        <Status />
      </Provider>
    </div>
  );
}