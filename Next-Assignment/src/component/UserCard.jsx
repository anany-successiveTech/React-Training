import React from "react";
import "@/app/styles/userCard.css";

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

// Example explorer comentaed code

// app
// /assignment-1/
//       question-1/ques-1.jsx
//       question-2/ques-2.jsx
//       question-3/ques-3.jsx
//       question-4/ques-4.jsx
//       question-5/ques-5.jsx
//       page.jsx
// /assignment-2/
//       question-1/page.js
