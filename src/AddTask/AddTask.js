import React, { useState } from "react";
import moment from "moment";

//  Any component can keep track of its own state, so long as parent componnents don't need 
// to know about this state 

// This component is now a controlled component (a controlled form)


function AddTask(props) {
    // Create some initial state for the form
    const [taskText, setTaskText] = useState("");
    //const [date, setDate] = useState("2020-03-29"); // TODO: use moment to set the initial date to 1 week from now
    const [date, setDate] = useState(moment().format('ddd Do MMMM YYYY'));

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handleAddTask = () => {
        if (taskText === "") {
            alert("Add a new task")
        } else if (date === "") {
            alert("Date required")
        } else {
            props.addTaskFunc(taskText, date);
            setTaskText("")
            setDate(moment().format('ddd Do MMMM YYYY'))
        }
    }


    // Make sure we can listen to any events that happen in the form, update state accordingly
    return (
        <div className="row addTask">
            <div className="col-md-4">
                <input type="text" className="input-group" id="addTask" placeholder="Add new task" value={taskText} onChange={handleTextChange} />
            </div>

            <div className="col-md-4">
                <input type="date" className="input-group" value={date} onChange={handleDateChange} />
            </div>


            <div className="col-md-4">
                <button className="btn" onClick={handleAddTask}><i className="fas fa-plus-circle"></i></button>
            </div>
        </div>
    )
}

export default AddTask;