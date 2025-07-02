// src/components/UserCard/UserCard.jsx

import React from "react";
import "../app/styles/userCard.css";

const UserCard = ({ name, email, imageUrl }) => {
  return (
    <div>
      <div className="card">
        <img src={imageUrl} alt={name} className="image" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
