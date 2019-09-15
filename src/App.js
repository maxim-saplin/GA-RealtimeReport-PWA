import React, {Component} from 'react';
import { createStore } from 'redux'
import { install } from 'redux-loop';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import rootReducer from './reducers';
import * as actions from './actions';
import './App.css';
import Authorize from './containers/Authorize';
import Users from './components/Users';

const store = createStore(rootReducer, {}, install());

class App extends Component {

  constructor(props) {
    super(props);
    store.dispatch(actions.authorizeAuto())
  }

  render() {
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
            let redir = 
              <Redirect to={{
                  pathname: "/auth", 
                  state: { referrer: props.location }
                }}
              />

            return redir;
          }
        }
      }   
    />);
}

// const mapStateToProps = state => {
//   const { selectedSubreddit, postsBySubreddit } = state
//   const {
//     isFetching,
//     lastUpdated,
//     items: posts
//   } = postsBySubreddit[selectedSubreddit] || {
//     isFetching: true,
//     items: []
//   }

//   return {
//     selectedSubreddit,
//     posts,
//     isFetching,
//     lastUpdated
//   }
// }

// export default connect(mapStateToProps)(App)

export default App;
