import React from "react";
import "@/app/styles/home.css";
import Greeting from "@/component/greeting";
const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        1. Create a functional component named Greeting that displays a simple
        "Hello, Next.js!" message on the screen. Import and render the Greeting
        component in the App component.
      </p>
      <div className="header">
        <h2>Welcome to the Greeting Component!</h2>
        <Greeting/>
      </div>
    </div>
  );
};

export default Page;
