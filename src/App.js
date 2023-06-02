import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {

  const [todo, setTodo] = useState("");
  const [favorite, setFavorite] = useState(false)
  const [todoList, setTodoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
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
        handleSearch={handleSearch}
      />
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        deleteTodo={deleteTodo}
        searchQuery={searchQuery}
      />
    </div>
  );
}

export default App;
