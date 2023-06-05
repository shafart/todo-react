import React  from 'react';
import MyButton from './UI/buttons/MyButton';
import styles from './UI/buttons/MyButton.module.css';
import { IoIosStarOutline, IoIosStar } from 'react-icons/io';

const TodoItem = ({ completed, toggleCheckbox, deleteTodo, todo, favorite, setFavorite }) => {


  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <>
      <div className={'todo todo-animation'}>
        <li>
          <input
            className="form-check-input"
            type="checkbox"
            id="checkboxNoLabel"
            value=""
            aria-label="..."
            checked={completed || false}
            onChange={toggleCheckbox}
          />

          <span className={completed ? 'completed' : ''} contentEditable={true} suppressContentEditableWarning={true}>
            {todo}
          </span>

          {!favorite ? (
            <IoIosStarOutline className="iconFavorite" size="25px" onClick={handleFavorite} />
          ) : (
            <IoIosStar className="iconFavorite" size="25px" onClick={handleFavorite} />
          )}
        </li>

        <MyButton className={`${styles.btn} ${styles.btnDel}`} onClick={deleteTodo}>
          Удалить
        </MyButton>
      </div>
    </>
  );
};

export default TodoItem;
