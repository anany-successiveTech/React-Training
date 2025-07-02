"use client";

import React, { useState } from "react";
import "@/app/styles/todo.css";

const TodoListMaker = () => {
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

export default TodoListMaker;
