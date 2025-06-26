"use client";

import React, { useState } from "react";
import "../../styles/todo.css";

const TaskList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleOnchnage = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === "") return;
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
     <p style={{ textAlign: 'center', margin:'2rem'}}>
3. Create a functional component called ToDoList.
Use the useState hook to manage a state variable named todos, initialized as an empty array.
Render a list of todos using the map function.
Each todo should have a checkbox to mark it as completed and a delete button to remove it from the list.
Use the useState hook to manage the state of each todo item (completed or not).
      </p>
    <div className="task-container">
      <h1 className="task-title">Task List</h1>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleOnchnage}
          placeholder="Enter a task"
          className="task-input"
        />
        <button type="submit" className="task-button">
          Add Task
        </button>
      </form>

      <ul className="task-list">
        {todos.map((todo, index) => (
          <li key={index} className="task-item">
            <span>{todo}</span>
            <span className="task-actions">
              <input type="checkbox" />
              <button onClick={() => handleDelete(index)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
      </>
  );
};

export default TaskList;
