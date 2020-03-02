import React, { useEffect } from 'react';
import Search from "../../components/Form/Search/Search";
import List from "../../components/List/List";
import AsideBar from "../../components/AsideBar/AsideBar";
import s from './Todo.module.scss';
import { favoriteIcon } from "../../components/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import {getTodos} from "../../store/actions/todosActions";

const Todo = () => {
  const todos = useSelector(state => state.todo.todos );
  const dispatch = useDispatch();

  const asideGroups = [
    {
      title: 'Filters',
      categories: [
        {id: 1, title: 'Starred', icon: favoriteIcon},
        {id: 2, title: 'Priority', icon: favoriteIcon},
        {id: 3, title: 'Sheduled', icon: favoriteIcon},
        {id: 4, title: 'Today', icon: favoriteIcon}
      ]
    },
    {
      title: 'Lables',
      categories: [
        {id: 5, title: 'Frontend', icon: favoriteIcon},
        {id: 6, title: 'Backend', icon: favoriteIcon},
        {id: 7, title: 'Api', icon: favoriteIcon},
        {id: 8, title: 'Mobile', icon: favoriteIcon},
      ]
    },
  ];

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className={s.todo_wrapper}>
      <div className={s.left}>
        <AsideBar items={asideGroups}/>
      </div>
      <div className={s.right}>
        <Search/>
        <List items={todos}/>
      </div>
    </div>
  )
};

export default Todo;