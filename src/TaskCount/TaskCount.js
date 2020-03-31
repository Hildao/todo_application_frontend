import React from "react";

function TaskCount(props) {
    // { count: 0 }
    return(
        <div className="row m-3">
            <div className="col-12">
                <p className="taskCount">{props.count} incomplete tasks</p>
            </div>
        </div>
    )
}

export default TaskCount;