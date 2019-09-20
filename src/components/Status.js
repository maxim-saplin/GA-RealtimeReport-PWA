import React from 'react';

function Status({online, authorized, currentAccount}) {
  return (
    <div id="status">
      {online ? "Online; " : "Offline;"}
      {authorized ? "Authorized; " : "Not Authorizded;"}
      {currentAccount ? "GA Selected; " : "GA Not Selected;"}
    </div>
  );
}

export default Status;