"use client";
import UseLocalestorage from "@/hooks/useLocaleStorage";
import React, { useState, useEffect } from "react";
import Input from "@/component/Input";
import "@/app/styles/localeStorage.css";

const MyComponent = () => {
  const [setValue, removeValue, getStoredValue] = UseLocalestorage("name", "random");
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  // console.log("the value", getStoredValue);
  

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message]);

  const handleSet = () => {
    if (inputValue !== "") {
      setValue(inputValue);
      setMessage("Data Stored");
    } else {
      alert("Please enter something");
    }
  };
  const handleRemove = () => {
    removeValue();
    setMessage("Removed Data");
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        18. Design a custom hook named useLocalStorage to interact with local
        storage. Create a useLocalStorage hook that allows storing and
        retrieving data from local storage. Implement methods for setting,
        getting, and removing data using the hook. Utilize the localStorage API
        within the hook to manage data. Develop a component that uses the
        useLocalStorage hook to manage user preferences.
      </p>
      <div className="local-container">
        <Input
          type={"text"}
          placeholder={"Enter the name ... "}
          value={inputValue}
          onChange={handleChange}
        />
        <div className="btn-container">
          <button onClick={handleSet} className="set-btn">
            Set Name
          </button>
          <button onClick={handleRemove} className="set-btn">
            Remove Name
          </button>
        </div>
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default MyComponent;
