import React from 'react';

function Status({online, authorized, selectedAccount}) {
  return (
    <>
      {online ? "Online; " : "Offline;"}
      {authorized ? "Authorized; " : "Not Authorizded;"}
      {selectedAccount ? "GA Selected; " : "GA Not Selected;"}
    </>
  );
}

export default Status;