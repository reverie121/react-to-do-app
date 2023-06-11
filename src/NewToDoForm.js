// NewTodoForm - this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created. - Todo- this component should display a div with the task of the todo.

import React, {useState} from "react";
import './NewToDoForm.css';

const NewToDoForm = ( { addToDo } ) => {
   
    const INITIAL_STATE = {
        task: ''
        }
    
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ ...formData });
        setFormData(INITIAL_STATE)
    }    
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="task"></label>
                <input
                    id="task"
                    type="text"
                    name="task"
                    placeholder="To Do Item"
                    value={formData.task}
                    onChange={handleChange}
                />
            </div>
            <button>Add Task</button>
        </form>
    )
}

export default NewToDoForm;