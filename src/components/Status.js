import React from 'react';

function Status({online, authorized, currentAccount}) {
  return (
    <>
      {online ? "Online; " : "Offline;"}
      {authorized ? "Authorized; " : "Not Authorizded;"}
      {currentAccount ? "GA Selected; " : "GA Not Selected;"}
    </>
  );
}

export default Status;