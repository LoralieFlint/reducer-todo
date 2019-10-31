import React, { useState } from 'react';

const TodoForm = ({ addItem, clearCompleted }) => {

    const [task, setTask] = useState('');
    
    const handleChange = event => {
        setTask(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        addItem(task);
        setTask('');
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input className="input"
                   type='text' 
                   name='task'
                   placeholder='add todo'
                   value={task}
                   onChange={handleChange}
            />
            <button type='submit' className="addItem">Add new task</button>
            <button className="deleteItem" onClick={clearCompleted}>Clear completed tasks</button>
        </form>
    )
}

export default TodoForm;