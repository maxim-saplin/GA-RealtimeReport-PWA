import React from 'react';

function Status({online, authorized, currentAccount, lastFetch}) {
  return (
    <div id="status">
      {online ? "Online; " : "Offline; "}
      {authorized ? "Authorized; " : "Not Authorizded; "}
      {currentAccount ? "GA Selected; " : "GA Not Selected; "}
      {lastFetch ? lastFetch.getHours()+":"+lastFetch.getMinutes()+":"+lastFetch.getSeconds() : ""}
    </div>
  );
}

export default Status;