import React, { useReducer } from 'react';
import './App.css';

// components
import TodoForm from "./reducers/components/TodoForm";
import TodoList from "./reducers/components/TodoList";
// reducers
import {InitialState, Reduce} from "./reducers/reducer"

function App() {
  const [state, dispatch] = useReducer(Reduce, InitialState);

  const addItem = task => {
    dispatch({ type: "ADD_ITEMS", payload: task});
  }

  const toggleItems = id => {
    dispatch({ type: "TOGGLE_ITEMS", payload: id })
  }

  const clearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addItem={addItem} clearCompleted={clearCompleted} />
      <TodoList todoList={state.todoList} toggleTask={toggleItems} />
    </div>
  );
}

export default App;
