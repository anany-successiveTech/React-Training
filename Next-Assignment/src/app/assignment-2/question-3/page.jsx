"use client";

import TodoListMaker from "@/component/Todo";
import React from "react";

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        3. Create a functional component called ToDoList. Use the useState hook
        to manage a state variable named todos, initialized as an empty array.
        Render a list of todos using the map function. Each todo should have a
        checkbox to mark it as completed and a delete button to remove it from
        the list. Use the useState hook to manage the state of each todo item
        (completed or not).
      </p>
      <TodoListMaker/>
    </div>
  );
};

export default Page;
