import React from 'react';
import Button from './UI/buttons/Button';
import styles from './UI/buttons/Button.module.css'; 

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
                <Button
                    className={`${styles.btn} ${styles.btnAdd}`}
                    onClick={addTodo}
                >Создать
                </Button>
            </div>
        </div>
    )
}

export default TodoInput;