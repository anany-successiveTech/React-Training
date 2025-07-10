"use client";

import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  FormControl,
  FormLabel,
} from "@mui/material";
import "@/app/styles/formShow.css";

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
      <p className="form-desc">
        2. Build a form that includes various input fields like text inputs,
        checkboxes, and radio buttons. Ensure that each input is a controlled
        component. When the user submits the form, log the form data to the
        console.
      </p>

      <form onSubmit={handleSubmit} className="form-container">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          required
          className="form-input"
        />

        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
          }
          label="I agree to the terms"
          className="form-checkbox"
        />

        <FormControl className="form-radio-group">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            row
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="female" control={<Radio />} label="Female" />
          </RadioGroup>
        </FormControl>

        <Button variant="contained" type="submit" className="form-button">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SimpleForm;
