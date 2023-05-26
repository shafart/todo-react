import React from 'react';
import Button from './UI/buttons/Button';
import styles from './UI/buttons/Button.module.css';

const TodoItem = ({todo, completed, toggleCheckbox, deleteTodo}) => {
    return (
        <>
            <div className='todo'>
                <li
                    contentEditable={true}
                    className={completed ? 'completed' : ''}
                >
                    <input
                        className='checkbox'
                        type='checkbox'
                        checked={completed || false}
                        onChange={toggleCheckbox}
                    />
                    {todo}
                </li>
                <Button
                    className={`${styles.btn} ${styles.btnDel}`}
                    onClick={deleteTodo}
                >
                    Удалить
                </Button>
            </div>
        </>
    )
}

export default TodoItem;