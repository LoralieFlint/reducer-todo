import React from 'react';

const TodoList = ({ todoList, toggleTask }) => {
    
    return (
      
        <div className="list">
            {todoList.map(task => {
                return <div key={task.id} 
                            onClick={() => toggleTask(task.id)}
                            className={ task.completed === true ? 'completed-task' : '' }
                            >{task.item}</div>
            })}
        </div>
    )
}

export default TodoList;