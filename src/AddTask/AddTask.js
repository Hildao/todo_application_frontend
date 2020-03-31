import React from "react";

function AddTask() {
    return (
        <div className="row addTask">
            <div className="col-4">
                <input type="text" className="input-group" id="addTask" placeholder="Add new task"></input>
            </div>

            <div className="col-3">
                <input type="date" className="input-group" />
            </div>


            <div className="col-3">
                <button className="btn"><i className="fas fa-plus-circle"></i></button>
            </div>
        </div>
    )
}

export default AddTask;