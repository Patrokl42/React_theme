import React, { useEffect } from 'react';
import Search from "../../components/Form/Search/Search";
import List from "../../components/List/List";
import AsideBar from "../../components/AsideBar/AsideBar";
import { useHistory } from 'react-router';
import s from './Todo.module.scss';
import { favoriteIcon, checkIcon, bookMark } from "../../components/Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../store/actions/todosActions";
import { Switch, Route } from 'react-router-dom';
import { routes } from "../routes";

const Todo = () => {
  const todos = useSelector(state => state.todo.todos );
  const dispatch = useDispatch();
  const history = useHistory();

  const asideGroups = [
    {
      title: 'Filters',
      categories: [
        {id: 1, title: 'Completed', icon: checkIcon, navigateTo: routes.todoCompleted},
        {id: 2, title: 'Favorite', icon: favoriteIcon, navigateTo: routes.todoFavorites},
      ]
    },
    {
      title: 'Lables',
      categories: [
        {id: 5, title: 'Frontend', icon: bookMark, navigateTo: 'frontend'},
        {id: 6, title: 'Backend', icon: bookMark, navigateTo: 'backend'},
        {id: 7, title: 'Api', icon: bookMark, navigateTo: 'api'},
        {id: 8, title: 'Mobile', icon: bookMark, navigateTo: 'mobile'},
      ]
    },
  ];

  useEffect(() => {
    history.push(routes.todoAll);
    dispatch(getTodos());
  }, []);

  return (
    <div className={s.todo_wrapper}>
      <div className={s.left}>
        <AsideBar items={asideGroups} title={'ADD TASK'}/>
      </div>
      <div className={s.right}>
        <Search/>
        <Switch>
          <Route path={routes.todoAll} component={() => <List items={todos} filter={'SHOW_ALL'}/>}/>
          <Route path={routes.todoCompleted} component={() => <List items={todos} filter={'SHOW_COMPLETED'}/>}/>
          <Route path={routes.todoFavorites} component={() => <List items={todos} filter={'SHOW_FAVORITES'}/>}/>
        </Switch>
      </div>
    </div>
  )
};

export default Todo;