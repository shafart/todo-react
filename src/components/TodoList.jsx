import React from 'react'

const TodoList = ({ todoList, deleteTodo }) => {
    return (
        <>
            {todoList?.length > 0
                ? <ul className='todo-wrapper'>
                    {todoList.map((todo, index) => (
                        <div className='todo'>
                            <li key={index}>
                                {todo}
                            </li>
                            <button
                                className="delete-button"
                                onClick={() => {
                                    deleteTodo(todo);
                                }}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </ul>
                : <div className='empty'>
                    <p>Список задач пуст</p>
                </div>
            }
        </>
    )
}

export default TodoList