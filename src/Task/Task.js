import React from "react";
import moment from "moment";

const Task = (props) => {
    // props = { text: "Do the dishes", dueDate: "2020-03-10", completed: true, id: 2, deleteTaskFunc: fn() }

    const handleClick = () => {
        props.deleteTaskFunc(props.id)
    };

    return (
        <div className="row taskRow">
            <div className="col-12 col-md-4">
                {props.text}
            </div>

            <div className="col-6 col-md-2">
                {moment(props.dueDate).format('ddd Do MMMM YYYY')}
            </div>

            <div className="col-6 col-md-2">
                {props.completed === false && <button className="btn btn-primary">Mark as complete</button>}
            </div>

            <div className="col-6-md-2">
                <button className="btn btn-danger" onClick={handleClick}>Delete</button>
            </div>

        </div>

    )
}

export default Task;