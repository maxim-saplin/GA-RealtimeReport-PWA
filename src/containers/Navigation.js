import React, {useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

function Navigation ({authorized, onSignIn, onSignOut, history}) {
  const redirect = () => {
    history.push("/")
  } 
  
  return (
    <div>
      {!authorized && <button onClick={onSignIn}>Sign in</button>}
      {authorized && history.location.pathname === "/auth" && <button onClick={onSignOut}>Sign out</button>}
      {authorized && history.location.pathname === "/auth" && <button onClick={() => history.push("/")}>Proceed</button>}
      {authorized && history.location.pathname !== "/auth" && <button onClick={() => history.push("/auth")}>Switch Account</button>}
  </div>)
}

const mapStateToProps = (state) => {
  return {
    ...state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignIn: () => {
      dispatch(actions.authorizeManual())
    },
    onSignOut: () => {
      dispatch(actions.authorizeSingout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);