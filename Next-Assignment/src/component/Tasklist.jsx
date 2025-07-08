import React from "react";
import "@/app/styles/tasklist.css"

const Tasklist = ({ tasks }) => {
  return (
    <div className="tasklist-container">
      <h1 className="tasklist-title">Task List</h1>
      <ul className="tasklist">
        {tasks.map((taskItem, index) => (
          <li key={index} className="tasklist-item">{taskItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasklist;
