import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {

  const [todo, setTodo] = useState("");
  const [favorite, setFavorite] = useState(false)
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    if (todo !== "") {
      const newTodo = {
        text: todo,
        favorite: favorite
      };
      setTodoList([...todoList, newTodo]);
      setTodo("");
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todoList.filter((todo) => {
      return todo !== text;
    });
    setTodoList(newTodos);
  };



  return (
    <div className="App">
      <h1>Список задач</h1>
      <TodoInput
        todo={todo}
        addTodo={addTodo}
        setTodo={setTodo}
        favorite={favorite}
        setFavorite={setFavorite}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
