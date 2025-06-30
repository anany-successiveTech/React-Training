"use client";

import React, { useState } from "react";
import Input from "../../../component/Input";
import "../../styles/form.css";

const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="main-form">
      <p style={{ textAlign: "center", margin: "2rem" }}>
        2. Create a functional component called PersonForm. Use the useState
        hook to manage three state variables: firstName, lastName, and age, all
        initialized to empty strings. Render three input fields for the user to
        enter their first name, last name, and age. As the user types, update
        the respective state variables. Display the entered information below
        the input fields.
      </p>
      <div className="message">
      <div className="form-container">
        <form>
          <div>
            <Input
              type="text"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
            
          </div>
          <div className="">
            <Input
              type="text"
              placeholder="Enter Age"
              onChange={(e) => setAge(e.target.value)}
            />
          
          </div>
        </form>
      </div>
      <div className="display-input">
        <p>First Name : {firstName}</p>
        <p>Last Name : {lastName}</p>
        <p>Your Age : {age}</p>
      </div>
      </div>
    </div>
  );
};

export default Page;
