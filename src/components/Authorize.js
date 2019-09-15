import React from 'react';

function Authorize(props) {
  return (
    <>
      {!props.authorized && <button onClick={props.onLogIn}> Log-in</button>}
      {props.authorized && <button>Log-out</button>}
      <br/>

      <span>Account</span>
      <select></select>
      <br/>

      <span>Property</span>
      <select></select>
      <br/>

      <span>View</span>
      <select></select>
      <br/>
    </>
  );
}

export default Authorize;