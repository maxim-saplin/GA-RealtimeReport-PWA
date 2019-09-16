import React, {useState} from 'react';
import AccountSelection from './AccountSelection'

function Authorize({authorized, onSignIn, onSignOut, onAccountChoice, availableAccounts, currentAccount}) {
  const [tempCurrAccount, setTempCurrAccount] = useState(currentAccount ? currentAccount : null);
  
  return (
    <>
      {!authorized && <button onClick={onSignIn}>Sign in</button>}
      {authorized && <button onClick={onSignOut}>Sign out</button>}
      {authorized && <button onClick={onAccountChoice(tempCurrAccount)}>Proceed -></button>}
      <br/>

      <AccountSelection availableAccounts={availableAccounts} currentAccount={tempCurrAccount} onChange={(val) => setTempCurrAccount(val)}/>
 
    </>
  );
}

export default Authorize;