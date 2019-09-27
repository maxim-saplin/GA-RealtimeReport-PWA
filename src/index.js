import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

window.gapi.load("auth", () => {
  window.dispatch(actions.authorizeAuto());
});

window.addEventListener("online", () => {
    window.dispatch(actions.networkOnline());
});

window.addEventListener("offline", () => {
    window.dispatch(actions.networkOffline());
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();