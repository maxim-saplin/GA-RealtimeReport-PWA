import React, { Component } from 'react';
import { createStore } from 'redux'
import { install } from 'redux-loop';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ConditionalRoute from './misc/ConditionalRoute';
import rootReducer from './reducers';
import AccountSelection from './containers/AccountSelection';
import Navigation from './containers/Navigation';
import Status from './containers/Status';
import Users from './containers/Users';

const store = createStore(rootReducer, {}, install());
window.dispatch = store.dispatch;

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route component={Navigation}/>
          <Route exact path="/auth" component={AccountSelection} />
          <ConditionalRoute exact path="/" component={Users} conditionEval={() => store.getState().auth.authorized} />
        </Router>
        <Status />
      </Provider>
    </div>
  );
}