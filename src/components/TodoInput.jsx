import React from 'react';

const TodoInput = ({todo, addTodo, setTodo}) => {

    return (
        <div>
            <div className='input-wrapper'>
                <input
                    type='text'
                    placeholder='Создайте задачу'
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                <button
                    className='add-button'
                    onClick={addTodo}
                >Создать
                </button>
            </div>
        </div>
    )
}

export default TodoInput;