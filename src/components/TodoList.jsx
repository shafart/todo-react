import React, { useState } from 'react'
import TodoItem from './TodoItem';
import MySwitch from './UI/select/MySwitch';


const TodoList = ({ todoList, deleteTodo, setTodoList }) => {

    const [completedTodo, setCompletedTodo] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);
  
    const isSwitchDisabled = todoList.length < 2;
  
    const toggleFavorites = () => {
      setShowFavorites(!showFavorites);
    };
  
    const filteredTodoList = showFavorites
      ? todoList.filter((todo) => todo.favorite)
      : todoList;
  
    const toggleCheckbox = (index) => {
      const newCompletedTodo = [...completedTodo];
      newCompletedTodo[index] = !newCompletedTodo[index];
      setCompletedTodo(newCompletedTodo);
    };
  
    const setFavorite = (index) => {
      const newTodoList = [...todoList];
      newTodoList[index].favorite = !newTodoList[index].favorite;
      setTodoList(newTodoList);
    };
  
    return (
      <>
        {todoList?.length > 0 ? ( 
          <ul className="todo-wrapper todo-animation">
            <MySwitch
              checked={showFavorites}
              onChange={toggleFavorites}
              disabled={isSwitchDisabled}
            />
            {filteredTodoList.map((todo, index) => (
              <TodoItem
                key={index}
                todo={todo.text}
                completed={completedTodo[index]}
                toggleCheckbox={() => toggleCheckbox(index)}
                deleteTodo={() => deleteTodo(todo)}
                favorite={todo.favorite}
                setFavorite={() => setFavorite(index)}
              />
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>Список задач пуст</p>
          </div>
        )}
      </>
    );
  };
  
export default TodoList;