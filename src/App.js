import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './components/context/TodoContext';


function App() {


  return (
    <TodoProvider>
    <div className="App">
      <h1>Список задач</h1>
      <TodoInput />
      <TodoList />
    </div>
  </TodoProvider>
  );
}

export default App;
