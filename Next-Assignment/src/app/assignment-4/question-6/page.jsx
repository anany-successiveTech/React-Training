import TodoListMaker from "@/component/Todo";
import React from "react";

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        6. Build a simple todo list component with a text input for adding new
        tasks and a list to display them. Use controlled components to handle
        the input and update the list of tasks.
      </p>
      <TodoListMaker />
    </div>
  );
};

export default Page;
