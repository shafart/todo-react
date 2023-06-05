import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState('');
  const [favorite, setFavorite] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addTodo = () => {
    if (todo !== '') {
      const newTodo = {
        text: todo,
        favorite: favorite,
      };
      setTodoList([...todoList, newTodo]);
      setTodo('');
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todoList.filter((todo) => {
      return todo !== text;
    });
    setTodoList(newTodos);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const todoContextValue = {
    todo,
    setTodo,
    favorite,
    setFavorite,
    todoList,
    setTodoList,
    searchQuery,
    setSearchQuery,
    addTodo,
    deleteTodo,
    handleSearch,
  };

  return (
    <TodoContext.Provider value={todoContextValue}>
      {children}
    </TodoContext.Provider>
  );
};
