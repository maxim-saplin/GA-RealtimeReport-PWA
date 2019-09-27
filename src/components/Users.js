import React from 'react';

function Users({usersNow, countriesAndUsersNow, usersToday, countriesAndUsersToday}) {
  return (
    <div id="users">
      <div>
        <h1>NOW</h1>
        <h1>{usersNow}</h1>
        {
          countriesAndUsersNow && countriesAndUsersNow.length > 0 &&
          countriesAndUsersNow.map(i => <><span key={i[0]}>{i[0]}:</span><span class="right">{i[1]}</span><br/></>)
        }
      </div>
      <div>
        <h1>TODAY</h1>
        <h1>{usersToday}</h1>
        {
          countriesAndUsersToday && countriesAndUsersToday.length > 0 &&
          countriesAndUsersToday.map(i => <><span key={i[0]}>{i[0]}:</span><span class="right">{i[1]}</span><br/></>)
        }
      </div>
    </div>
  );
}

export default Users;