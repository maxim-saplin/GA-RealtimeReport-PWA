import React from 'react';

function Users({users, countriesAndUsers, title}) {
  return (
    <div class="users">
        <h2>{title}</h2>
        <h1>{users}</h1>
        {
          countriesAndUsers && countriesAndUsers.length > 0 &&
          countriesAndUsers.map(i => <><span key={i[0]}>{i[0]}:</span><span class="right">{i[1]}</span><br/></>)
        }
    </div>
  );
}

export default Users;