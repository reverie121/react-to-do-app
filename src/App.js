// App - this component should render the TodoList component

import React from 'react';
import ToDoList from './ToDoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
