import React from "react";
import s from "./ListItem.module.scss";

import { favoriteIcon } from "../Icons/Icons";
import { useDispatch } from "react-redux";
import { completeTodo } from "../../store/actions/todosActions";

const ListItem = ({item}) => {

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(completeTodo(item))} className={`${s.list_item} ${item.isComplete ? s.list_item_done : ''}` }>
      <div className={s.left}>
        <div className={s.item_title}>
          { item.title }
        </div>
        <div className={s.item_description}>
          { item.description }
        </div>
        <div className={s.lables}>
          <div className={s.lable}>
            Frontend
          </div>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.options}>
          <button className={s.button}>{favoriteIcon}</button>
        </div>
      </div>
    </div>
  )
};

export default ListItem;