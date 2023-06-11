// TodoList - this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.

import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import './ToDoList.css';

const ToDoList = () => {
    const INITIAL_STATE = [ {id: uuid(), task: 'Add tasks to this list'} ];

    const [ toDos, setToDos ] = useState(INITIAL_STATE)

    const addToDo = (newToDo) => {
        setToDos(todos => [...todos, { ...newToDo, id: uuid() }]);
    }

    const removeToDo = (e) => {
        const toDoListModified = toDos.filter(toDo => toDo.id !== e.target.id );
        setToDos(toDoListModified);
    }

    return (
        <div className='ToDoList'>
            <h3>To Do List</h3>
            <NewToDoForm addToDo={addToDo} />
            <div>
                {toDos.map( ({ id, task }) => <ToDo 
                id={id}  
                task={task} 
                key={id}
                removeToDo={removeToDo}
                />)}
            </div>
        </div>
    )
}

export default ToDoList;