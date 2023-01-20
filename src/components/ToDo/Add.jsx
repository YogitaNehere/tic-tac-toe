import React from "react";

const Add = (props) => {
    return (
        <>
        <div className="row">
            <div className="col1">
                <span>{props.todo}</span>
            </div>
            <div className="col2">
                <label>Mark as complete</label>
                <input type="checkbox" id="status" />
            </div>

        </div>
        </>
    );
}

export default Add;