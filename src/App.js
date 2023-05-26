  import React, {useState} from 'react';
  import './App.css';
  import TodoInput from './components/TodoInput';
  import TodoList from './components/TodoList';

  function App() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);

    const addTodo = () => {
      if (todo !== "") {
        setTodoList([...todoList, todo]);
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
        />
        <TodoList 
          todoList={todoList} 
          setTodoList={setTodoList} 
          deleteTodo={deleteTodo} 
        />
        </div>
    );}

  export default App;
