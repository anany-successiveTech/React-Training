"use client";

import "@/app/styles/Q-16.css";
import Input from "@/component/Input";

import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [newSalary, setNewSalary] = useState("");
  const [employees, setEmployees] = useState([
    { name: "Alice", salary: 55000 },
    { name: "Smith", salary: 62000 },
    { name: "Charlie", salary: 48000 },
    { name: "Carter", salary: 70000 },
    { name: "Brown", salary: 53000 },
    { name: "Fiona", salary: 59000 },
  ]);

  const averageSalary = useMemo(() => {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return Math.floor(total / employees.length);
  }, [employees]);

  const updateSalaries = () => {
    const updated = employees.map((emp) => ({
      ...emp,
      salary: emp.salary + newSalary,
    }));
    setEmployees(updated);
  };

  const handleSalaryChange = (event) => {
    const increment = parseFloat(event.target.value);
    setNewSalary(increment);
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        16. Create a functional component named EmployeeSalary that displays the
        average salary of a list of employees. Define an array of employee
        objects, where each object has a name and salary property. Use the
        useMemo hook to calculate the average salary of employees. Ensure that
        the useMemo hook has a dependency on the employee data so that it
        recalculates when the employee data changes. Render the average salary
        on the screen. Include a button that, when clicked, updates the employee
        data with new salaries.
      </p>
      <div className="salary-container">
        <h2>Average Salary: Rs.{averageSalary}</h2>
        <Input
          type="text"
          placeholder="Enter salary increment..."
          onChange={handleSalaryChange}
        />
        <button onClick={updateSalaries}>Increament</button>
      </div>
    </div>
  );
};

export default EmployeeSalary;
