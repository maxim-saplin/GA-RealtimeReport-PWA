import React, {useState} from 'react';

function AccountSelection({ availableAccounts, currentAccount, onChange}) {
  
  function getItemById(list, id){
    for (let i of list)
      if (i.id === id) return i;
    return null;
  }

  let accountId = null;
  let propertyId = null;
  let viewId = null;

  if (currentAccount){
      ({accountId, propertyId, viewId} = currentAccount);
  }

  if (accountId === null && availableAccounts && availableAccounts.length > 0 ) { 
    let acc = availableAccounts[0];
    accountId = acc.id;
    if (acc.properties && acc.properties.length > 0) {
      let prp = availableAccounts[0].properties[0];
      propertyId = prp.id;
      if (prp.views && prp.views.length > 0) {
        let vw = prp.views[0];
        viewId = vw.id;
      }
    }
    onChange({accountId, propertyId, viewId});
  }
  
  let account = accountId ? getItemById(availableAccounts, accountId) : null;
  let property = propertyId && account ? getItemById(account.properties, propertyId) : null;
  let view = viewId && property ? getItemById(property.views, viewId) : null;

  // Changed account, reset propertyID to the first one
  if (account && !property) {
    if (account.properties && account.properties.length > 0) {
      onChange({accountId, propertyId: account.properties[0].id, viewId})
    }
  }

  if (property && !view) {
    if (property.views && property.views.length > 0) {
      onChange({accountId, propertyId, viewId: property.views[0].id})
    }
  }
  
  return (
    <>
      <span>Account</span>
      <select onChange={(e) => onChange({accountId: e.target.value, propertyId, viewId}) } 
        value={accountId ? accountId : ""}>
      {
        account 
        && availableAccounts.map(i => <option key={i.id} value={i.id} >{i.name}</option>)
      }
      </select>
      <br/>
      
      <span>Property</span>
      <select onChange={(e) => onChange({accountId, propertyId: e.target.value, viewId}) } 
        value={propertyId ? propertyId : ""}>
      {
        property 
        && account.properties.map(i => <option key={i.id} value={i.id} >{i.name}</option>)
      }
      </select>
      <br/>

      <span>View</span>
      <select onChange={(e) => onChange({accountId, propertyId, viewId: e.target.value}) } 
        value={viewId ? viewId : ""}>
      {
        view 
        && property.views.map(i => <option key={i.id} value={i.id} >{i.name}</option>)
      }
      </select>
      <br/>
    </>
  );
}

export default AccountSelection;