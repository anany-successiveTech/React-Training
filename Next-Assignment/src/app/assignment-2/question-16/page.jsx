"use client";

import "@/app/styles/Q-16.css";

import React, { useState, useMemo } from "react";

const EmployeeSalary = () => {
  const [employees, setEmployees] = useState([
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 55000 },
  ]);

  const averageSalary = useMemo(() => {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employees.length).toFixed(2);
  }, [employees]);

  const updateSalaries = () => {
    const updated = employees.map((emp) => ({
      ...emp,
      salary: emp.salary + 1000,
    }));
    setEmployees(updated);
  };

  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        16.Create a functional component named EmployeeSalary that displays the
        average salary of a list of employees. Define an array of employee
        objects, where each object has a name and salary property. Use the
        useMemo hook to calculate the average salary of employees. Ensure that
        the useMemo hook has a dependency on the employee data so that it
        recalculates when the employee data changes. Render the average salary
        on the screen. Include a button that, when clicked, updates the employee
        data with new salaries.
      </p>
      <div className="salary-container">
        <h2>Average Salary: ${averageSalary}</h2>
        <button onClick={updateSalaries}>Update Salaries</button>
      </div>
    </div>
  );
};

export default EmployeeSalary;
