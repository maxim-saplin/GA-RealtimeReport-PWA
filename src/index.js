import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { install } from 'redux-loop';
import * as actions from './actions';
import rootReducer from './reducers';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.store = createStore(rootReducer, {}, install());
window.dispatch = window.store.dispatch;
window.store.dispatch(actions.serviceLoadState());

ReactDOM.render(<App />, document.getElementById('root'));

let gapiLoaded = false;

function loadGapi() {
  let script = document.createElement('script');
  script.onload = function () {
    window.gapi.load("auth", () => {
      window.gapi.client.load('analytics', 'v3').then(() => {
        gapiLoaded = true;
        window.dispatch(actions.authorizeAuto());
      });
    });
  };
  script.src = "https://apis.google.com/js/client.js";
  document.head.appendChild(script);
}

loadGapi();

window.addEventListener("online", () => {
  if (!gapiLoaded) loadGapi();
  window.dispatch(actions.networkOnline());
});

window.addEventListener("offline", () => {
  window.dispatch(actions.networkOffline());
});

document.addEventListener('resume', (event) => {
  window.dispatch(actions.networkOnline());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();