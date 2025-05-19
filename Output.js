import React from 'react';

function Output({ user }) {
  const formatDob = (dob) => {
    const date = new Date(dob);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return dd + mm + yyyy;
  };

  const key = user.firstname.substring(0, 2) + formatDob(user.dob);

  return (
    <div>
      <h2>Welcome, {user.firstname}!</h2>
      <p>Your key is: {key}</p>
    </div>
  );
}

export default Output;
