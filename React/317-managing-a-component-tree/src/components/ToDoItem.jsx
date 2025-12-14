import React from "react";
import { useState } from "react";

function ToDoItem(props) {
    const [isDone, setIsDone] = useState(false);

    function handleClicked() {
        setIsDone(prev => {
            return !prev;
        })
    }

    // return <li onClick={handleClicked} style={{textDecoration: isDone ? "line-through" : "none"}}> {props.text}</li>
    return <li onClick={() => {props.onChecked(props.id)}} style={{textDecoration: isDone ? "line-through" : "none"}}> {props.text}</li>
    // return <li onClick={props.onChecked(props.id)} style={{textDecoration: isDone ? "line-through" : "none"}}> {props.text}</li>
}

export default ToDoItem