import React from "react";

const UserProfile = ({ name, email, phone }) => {
  return (
    <div data-testid="user-profile">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
    </div>
  );
};

export default UserProfile;
