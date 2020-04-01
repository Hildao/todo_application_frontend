import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";

// Click on the delete button
// Our application needs to know this happened! (Listen for the event) 
// Know which button was clicked? 
// Remove the relevant todo object from our state 

// Click on the complete button
// our application needs to know this happens
// which button was clicked? (ID)
// Updates the relevant task in our state (completed = true)

// Adding a new task
// Ensure the AddTask component is controlled - so that it knows about what is being entered in the form
// Click on the add button
// Need to know that this happened 
// What is the state of the form when this click happens? - DONE
// Add the new task (constructed based on the data in the form) to the tasks list

//JSX
function App() {
  // If a value can be computed from one piece of state, no need to store it separately (count in this case)
  const [tasks, setTasks] = useState([
    {
      text: "Clean the dishes",
      completed: true,
      dueDate: "2020-04-02",
      id: uuidv4()
    },
    {
      text: "Wash the dog",
      completed: false,
      dueDate: "2020-04-03",
      id: uuidv4()
    },
    {
      text: "Hoover the cupboard",
      completed: true,
      dueDate: "2020-04-04",
      id: uuidv4()
    },
    {
      text: "Hoover the car",
      completed: false,
      dueDate: "2020-04-05",
      id: uuidv4()
    }
  ])

  // A function to delete a task from arra, and update the state with the new, shorter array
  //Any function that updates state should live where the state lives
  const deleteTask = (id) => {
    // delete /remove the task with the id from the tasks array

    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    // Update the state with the new (shorter) array
    setTasks(filteredTasks);
  };

  const markTaskComplete = (id) => {
    // Create a new array of updated tasks, where the completed property of the matching task has been updated
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }

      return task;
    });

    setTasks(newTasks);
  }

  const addTask = (text, date) => {
    // Create a new task object based on the data passed as parameters
    const newTask = {
      text: text,
      completed: false,
      dueDate: date,
      id: uuidv4() // TODO: UUID - use the UUID package from npm to generate a unique UUID 
    }
    // Create a new array of tasks which includes this new task
    // AVOID mutating arrays or object (push, pop, shift, splice, sort)
    const newTasks = [...tasks, newTask];

    // use the setTasks function to update the state
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <AddTask addTaskFunc={addTask} />
          <TaskCount count={tasks.length} />
          {/* Passing a prop of text to each Task component */}
          {tasks.map((task) => {
            return (
              <Task
                // An internal prop used by React to keep track of which Task component is which 
                key={task.id}
                deleteTaskFunc={deleteTask}
                markCompleteFunc={markTaskComplete}
                text={task.text}
                completed={task.completed}
                dueDate={task.dueDate}
                id={task.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
