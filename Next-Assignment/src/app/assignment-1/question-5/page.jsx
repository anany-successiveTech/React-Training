'use client'

import Tasklist from '@/component/tasklist';
import React from 'react'

const Page = () => {
const taskArray = [
  "Buy groceries",
  "Walk the dog",
  "Read a chapter of a book",
  "Clean the kitchen",
  "Finish React project",
  "Call Mom",
  "Pay utility bills"
];  

  return (
    <div className='task-main'>
              <p style={{ textAlign: 'center', margin:'2rem'}}>
5. Create a functional component named TaskList that accepts an array of task names as a prop.
Use the map function to render each task name as a list item.
Import and render the TaskList component in the App component with an array of tasks.
      </p>
      <Tasklist tasks={taskArray}/>
    </div>
  )
}

export default Page
