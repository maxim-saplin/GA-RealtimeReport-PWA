import React from 'react';

function Users({usersNow}) {
  return (
    <div>
      <h1>Users NOW:</h1>
      <h1>{usersNow}</h1>
    </div>
  );
}

export default Users;