import React from 'react';

function Users({usersNow, countriesAndUsers}) {
  return (
    <>
      <div>
        <h1>Users NOW:</h1>
        <h1>{usersNow}</h1>
      </div>
      <div>
        {
          countriesAndUsers && countriesAndUsers.length > 0 &&
          countriesAndUsers.map(i => <><span key={i[0]} value={i[0]} >{i[0]}: {i[1]}</span><br/></>)
        }
      </div>
    </>
  );
}

export default Users;