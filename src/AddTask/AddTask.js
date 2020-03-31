import React from "react";

function AddTask() {
    return (
        <div className="row addTask">
            <div className="col-10 mx-auto">
                <input type="text" className="input-group" id="addTask" placeholder="Add new task"></input>
            </div>

            <div className="col-2">
                <button className="btn"><i className="fas fa-plus-circle"></i></button>
            </div>
        </div>
    )
}

export default AddTask;