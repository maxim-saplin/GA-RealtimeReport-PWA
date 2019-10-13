import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

let gapiLoaded = false;

function loadGapi() {
  let script = document.createElement('script');
  script.onload = function () {
    window.gapi.load("auth", () => {
      gapiLoaded = true;
      window.dispatch(actions.authorizeAuto());
    });
  };
  script.src = "https://apis.google.com/js/client.js";
  document.head.appendChild(script);
}

//if (window.gapi && window.gapi.load) loadGapi();

loadGapi();

window.addEventListener("online", () => {
  if (!gapiLoaded) loadGapi();
  window.dispatch(actions.networkOnline());
});

window.addEventListener("offline", () => {
  window.dispatch(actions.networkOffline());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();