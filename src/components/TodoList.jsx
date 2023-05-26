import React, { useState } from 'react'
import TodoItem from './TodoItem';


const TodoList = ({ todoList, deleteTodo }) => {

    const [completedArray, setCompletedArray] = useState([false]);

    const toggleCheckbox = (index) => {
        const newCompletedArray = [...completedArray];
        newCompletedArray[index] = !newCompletedArray[index];
        setCompletedArray(newCompletedArray);
    }


    return (
        <>
            {todoList?.length > 0 ? (
                <ul className='todo-wrapper'>
                    {todoList.map((todo, index) => (
                        <TodoItem
                            key={index} 
                            todo={todo}
                            completed={completedArray[index]}
                            toggleCheckbox={() => toggleCheckbox(index)}
                            deleteTodo={() => deleteTodo(todo)}
                        />
                    ))}
                </ul>
                ) : (
                <div className='empty'>
                    <p>Список задач пуст</p>
                </div>
            )}
        </>
    );
};

export default TodoList