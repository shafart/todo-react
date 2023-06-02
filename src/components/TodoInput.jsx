import React     from 'react';
import MyButton from './UI/buttons/MyButton';
import styles from './UI/buttons/MyButton.module.css';

const TodoInput = ({ todo, addTodo, setTodo, handleSearch}) => {


    return (
        <div>
            <div className='input-wrapper'>
                <input 
                    style={{padding:'0.2em'}}
                    type="text" 
                    onChange={handleSearch} 
                    placeholder="Поиск..." 
                />
                <input
                    type='text'
                    placeholder='Создайте задачу'
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                <MyButton
                    className={`${styles.btn} ${styles.btnAdd}`}
                    onClick={addTodo}
                >Создать
                </MyButton>


            </div>
        </div>
    )
}

export default TodoInput;