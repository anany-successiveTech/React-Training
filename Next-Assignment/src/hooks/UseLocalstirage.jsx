import React, { useState } from "react";

const UseLocalestorage = (key, initialValue) => {
  const getStoredValue = () => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Key not found: ${(key, error)}`);
      return initialValue;
    }
  };
  const [storeValue, setStoreValue] = useState(getStoredValue);
  const setValue = (value) => {
    try {
      setStoreValue(value);
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`value not set, Something went wrong ${error}`);
    }
  };
  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setStoreValue(initialValue);
    } catch (error) {
      console.error(`Error removing the item ${error}`);
    }
  };
  return [setValue, removeValue, getStoredValue];
};

export default UseLocalestorage;
