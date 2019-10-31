import React from "react"

export const InitialState = {
  todoList: [
    { item: "Learn about reducers", completed: false, id: 3892987589 },
    { item: "Understand switch", completed: false, id: 3892987588 },
    { item: "understand dispatch", completed: false, id: 3892987587 },
    { item: "Learn about redux", completed: false, id: 3892987586 },
  ]
};
console.log(InitialState)
export function  Reduce (state, action) {
    switch (action.type) {
        case 'CLEAR_COMPLETED':
            return {
                todoList: state.todoList.filter(task => {
                    return task.completed !== true;
                })
            }
        case 'TOGGLE_ITEMS':
            return {
                todoList: state.todoList.map(task => {
                    if(task.id === action.payload){
                        return {
                            ...task, completed: !task.completed
                        } 
                    } else {
                        return task
                    }
                })
            }
        case 'ADD_ITEMS':
            const newTask = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return {
                todoList: [...state.todoList, newTask]
            }
        default:
            return state;
  }};
