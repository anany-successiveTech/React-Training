"use client";

import React, { useState } from "react";
import '@/app/styles/formShow.css'


const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    agree: false,
    gender: "",
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
      <div style={{ marginBottom: 12 }}>
        <label>
          Name: <br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            style={{ width: "100%", padding: 8 }}
          />
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />{" "}
          I agree to the terms
        </label>
      </div>

      <div style={{ marginBottom: 12 }}>
        Gender: <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>{" "}
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
      </div>

      <button type="submit" style={{ padding: "8px 16px" }}>
        Submit
      </button>
    </form>
    </div>
  );
}
export default SimpleForm