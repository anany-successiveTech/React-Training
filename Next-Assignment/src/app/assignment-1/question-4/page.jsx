"use client";
import Counter from "@/component/counter";
import React from "react";

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        4. Create a functional component named Counter that displays a count and
        two buttons: "Increment" and "Decrement". Implement event handlers for
        the "Increment" and "Decrement" buttons to increase and decrease the
        count. Display the updated count on the screen.
      </p>
      <Counter />
    </div>
  );
};

export default Page;
