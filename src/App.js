import React, { useState } from 'react';
import './App.css';
import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";


function App() {
  //0 - this number is 1 piece of state I want to keep track of
  // React REACTS to changes in state
  // let [counter, setCounter] = useState(0); //Array Destructuring (ES6)

  //function increaseCounterBy1() {
  //  setCounter(counter + 1);
  //}

  //function decreaseCountBy1() {
  //   if (counter > 0) {
  //    setCounter(counter - 1);
  //  }
  //}
  
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
                key={task.id}
                text={task.text}
                completed={task.completed}
                dueDate={task.dueDate}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
