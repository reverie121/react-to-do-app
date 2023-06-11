// For each Todo component, there should also be a button with the text “X” that when clicked, removes the todo.

import React from "react";
import './ToDo.css';

const ToDo = ( { id, task, removeToDo } ) => {
    return (
        <div>
            <button onClick={removeToDo} className='remove' id={`${id}`}>x</button> {task}
        </div>
    )
}

export default ToDo;