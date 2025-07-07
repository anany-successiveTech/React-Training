'use client';

import React, { useState, useCallback } from 'react';
import '@/app/styles/callbacktask.css'

const Page = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
    { id: 3, name: 'Task 3', completed: false },
    { id: 4, name: 'Task 4', completed: false },
    { id: 5, name: 'Task 5', completed: false },
    { id: 6, name: 'Task 6', completed: false },
  ]);

  const completeTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  }, []);

  return (
    <div className="page-container">
          <p style={{ textAlign: "center", margin: "2rem" }}>
        14. Create a component that displays a list of tasks.
        Each task has a "Complete" button.
        Implement a feature where clicking the "Complete" button marks the task as completed.
        Use the useCallback hook to create dynamic callback functions for each task.
        Ensure that clicking the "Complete" button for one task doesn't trigger unnecessary re-renders for other tasks.
      </p>

      <div className="task-list">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onComplete={completeTask} />
        ))}
      </div>
    </div>
  );
};
const TaskItem = ({ task, onComplete }) => {
  return (
    <div className="task-item">
      <span className={`task-name ${task.completed ? 'completed' : ''}`}>
        {task.name}
      </span>
      <button
        onClick={() => onComplete(task.id)}
        disabled={task.completed}
        className="complete-btn"
      >
        {task.completed ? 'Completed' : 'Complete'}
      </button>
    </div>
  );
};


export default Page;
