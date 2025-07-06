"use client";
import React, { useState } from "react";
import Button from "./button";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router = useRouter();
  const [activeQuestion, setActiveQuestion] = useState(null)
  const handleOnclick = (assignmentNo) => {
    setActiveQuestion(assignmentNo)
    router.push(`/assignment-${assignmentNo}`);
  };

  return (
    <div className="btn-container">
      {[1].map((num) => (
        <Button
          key={num}
          name={`assignment.${num}`}
          value={num < 2 ? num : null}
          onclick={(num)=>handleOnclick(num)}
          active={activeQuestion === num}
        />
      ))}
    </div>
  );
};

export default Navbar;
