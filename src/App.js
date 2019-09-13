import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import rootReducer from './reducers';
import './App.css';
import Authorize from './components/Authorize';
import Users from './components/Users';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/auth" component={Authorize} />
          <PrivateRoute exact path="/" component={Users} />
        </Router>
      </Provider>
    </div>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  let authorized = store.getState().auth.authorized;
  return (
    <Route
      {...rest}
      render = {
        props => {
          if (authorized) {
            return <Component {...props} />
          }
          else{
            let redir = <Redirect 
                          to={{
                                pathname: "/auth", 
                                //state: { referrer: props.location }
                              }}
                        />

            return redir;
          }
        }
      }
      
    />)
}

export default App;
