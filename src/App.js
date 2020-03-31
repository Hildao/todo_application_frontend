import React from 'react';
/*import logo from './logo.svg';*/
import './App.css';
import Header from "./Header/Header";
import AddTask from "./AddTask/AddTask";
import TaskCount from "./TaskCount/TaskCount";
import Task from "./Task/Task";


function App() {
  return (
    <div className="App">
      <Header />
      <main />
      <div className="container">
        <AddTask />
        <TaskCount />
        <Task />

      </div>
    </div>
  );
}

export default App;
