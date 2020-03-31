import React, { useState } from 'react';
import './App.css';
import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";

// Click on the delete button
// Our application needs to know this happened! (Listen for the event) - DONE
// Know which button was clicked? - DONE
// Remove the relevant todo object from our state - DONE

//JSX
function App() {
  // If a value can be computed from one piece of state, no need to store it separately (count in this case)
  const [tasks, setTasks] = useState([
    {
      text: "Clean the dishes",
      completed: true,
      dueDate: "2020-04-02",
      id: 1
    },
    {
      text: "Wash the dog",
      completed: false,
      dueDate: "2020-04-03",
      id: 2
    },
    {
      text: "Hoover the cupboard",
      completed: true,
      dueDate: "2020-04-04",
      id: 3
    },
    {
      text: "Hoover the car",
      completed: true,
      dueDate: "2020-04-05",
      id: 4
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
  }


  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <AddTask />
          <TaskCount count={tasks.length} />
          {/* Passing a prop of text to each Task component */}
          {tasks.map((task) => {
            return (
              <Task
                // An internal prop used by React to keep track of which Task component is which 
                key={task.id}

                deleteTaskFunc={deleteTask}
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
