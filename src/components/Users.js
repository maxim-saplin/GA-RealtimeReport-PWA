import React from 'react';

function Users({usersNow, countriesAndUsers}) {
  return (
    <div id="users">
        <h1>NOW</h1>
        <h1>{usersNow}</h1>

        {
          countriesAndUsers && countriesAndUsers.length > 0 &&
          countriesAndUsers.map(i => <><span key={i[0]}>{i[0]}:</span><span class="right">{i[1]}</span><br/></>)
        }

    </div>
  );
}

export default Users;