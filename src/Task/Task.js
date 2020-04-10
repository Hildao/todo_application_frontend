import React from "react";
import moment from "moment";

const Task = props => {
    /*  props = { 
        text: "Do the dishes",
        dueDate: "2020-03-10", 
        completed: true, 
        id: 2, 
        deleteTaskFunc: fn(), 
        markCompleteFunc: fn() 
    }
    */

    const handleDeleteClick = () => {
        props.deleteTaskFunc(props.id);
    };

    const handleCompleteClick = () => {
        props.markCompleteFunc(props.id);
    };

    return (
        <div className="row taskRow">
            <div className="col-md-6">
                <p className="task">{props.text}</p>
            </div>

            <div className="col-md-2">
                <p className="dueDate">{moment(props.dueDate).format('ddd Do MMMM YYYY')}</p>
            </div>

            <div className="col-md-2">
                {props.completed === false && (
                    <button className="btn" onClick={handleCompleteClick}><i class="fas fa-check-circle"></i></button>)}
            </div>

            <div className="col-md-2">
                <button className="btn" onClick={handleDeleteClick}><i class="fas fa-trash-alt"></i></button>
            </div>

        </div>
    )
}

export default Task;