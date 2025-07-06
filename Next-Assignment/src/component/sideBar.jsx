"use client"
import React from "react";
import Button from "./button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = ({ countArray, assignmentNo }) => {
  const router = useRouter();
  console.log(assignmentNo);
  
  const [activeQuest, setActiveQuestion] = useState(null)
  const handleOnclick = (fileNo) => {
     setActiveQuestion(fileNo)
    router.push(`/assignment-${assignmentNo}/question-${fileNo}`);
  };

  return (
    <div className="sidebar-btn-container">
      {countArray.map((num) => (
        <Button
          key={num}
          name={`question.${num}`}
          value={num}
          onclick={handleOnclick}
          active={activeQuest === num}
        />
      ))}
    </div>
  );
};

export default Sidebar;
