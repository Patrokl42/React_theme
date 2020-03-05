import React, {useState} from "react";
import { useDispatch } from "react-redux";

import { menuIcon } from "../../components/Icons/Icons";
import s from './AsideBar.module.scss';
import NavGroup from "../NavGroup/NavGroup";
import NavItem from "../NavItem/NavItem";
import {routes} from "../../scenes/routes";
import ReactDOM from "react-dom";
import TodoModal from "../Todo/TodoModal/TodoModal";
import {createTodo} from "../../store/actions/todosActions";

const AsideBar = ({items}) => {
  const [isModalOpen, toggleModal] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (todo) => {
    dispatch(createTodo(todo));
    toggleModal(false);
  };

  const modal = () => (
    ReactDOM.createPortal(
      <TodoModal openModal={toggleModal} onSubmit={onSubmit}/>,
      document.getElementById('modal')
    )
  );

  return (
    <div className={s.aside}>
      <button className={s.button} onClick={() => toggleModal(true)}>ADD TASK</button>
      <NavItem item={{title: 'All', icon: menuIcon, navigateTo: routes.todoAll}}/>
      {
        items.map(item => {
          return <NavGroup title={item.title} items={item.categories}/>
        })
      }
      {isModalOpen && modal()}
    </div>
  )
};

export default AsideBar;