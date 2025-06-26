'use client'
import React, { useState, useMemo } from "react";
import '@/app/styles/studentList.css'

const StudentList = () => {
  const [students, setStudents] = useState(['Alice', 'Bob', 'Charlie']);

  
  const memoizedStudents = useMemo(() => students, [students]);

  const addStudent = () => {
    const newStudentName = `Student ${students.length + 1}`;
    setStudents(prev => [...prev, newStudentName]);
  };

  return (
    <div className="container">
      <h2>Student List</h2>
       <button onClick={addStudent} className="add-btn">Add Student</button>
      <ul>
        {memoizedStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <p style={{ textAlign: "center", margin: "2rem" }}>
        15. Create a functional component named StudentList that displays a list
        of student names. Define an array of student names as a constant within
        the component. Use the useMemo hook to memoize the list of student
        names. Render the list of student names on the screen. Include a button
        that, when clicked, appends a new student name to the list.
      </p>
      <StudentList />
    </div>
  );
};

export default Page;

