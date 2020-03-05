import React, {useState} from "react";
import s from "./ListItem.module.scss";

import { favoriteIcon } from "../Icons/Icons";
import { useDispatch } from "react-redux";
import {completeTodo, favoriteTodo, updateTodo} from "../../store/actions/todosActions";
import { checkIcon } from "../Icons/Icons";
import ReactDOM from "react-dom";
import TodoModal from "../Todo/TodoModal/TodoModal";

const ListItem = ({item: todo}) => {
  const [isModalOpen, toggleModal] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (todo) => {
    console.log(todo);
    toggleModal(false);
    dispatch(updateTodo(todo))
  };

  const modal = () => (
    ReactDOM.createPortal(
      <TodoModal todo={todo} openModal={toggleModal} onSubmit={onSubmit}/>,
      document.getElementById('modal')
    )
  );

  return (
    <div className={`${s.list_item} ${todo.isComplete ? s.list_item_done : ''}` }>
      <div className={s.left} onClick={() => toggleModal(true)}>
        <div className={s.item_title}>
          { todo.title }
        </div>
        <div className={s.item_description}>
          { todo.description }
        </div>
        <div className={s.lables}>
          <div className={s.lable}>
            Frontend
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.options}>
          <button
            className={`${s.button} ${s.button_favorite} ${todo.isFavorite ? s.list_item_favorite : ''}`}
            onClick={() => dispatch(favoriteTodo(todo))}
          >
            {favoriteIcon}
          </button>
          <button onClick={() => dispatch(completeTodo(todo))} className={`${s.button} ${s.button_complete}`}>{checkIcon}</button>
        </div>
      </div>
      {isModalOpen && modal()}
    </div>
  )
};

export default ListItem;