import React from 'react';
import s from './NavBar.module.scss';
import {NavLink} from "react-router-dom";
import {routes} from "../../scenes/routes";
import {
  titcketIcon,
  agentIcon,
  bookIcon,
  diagramIcon,
  groupIcon,
  lampIcon,
  settingIcon
} from "../Icons/Icons";

import Avatar from "../User/Avatar/Avatar";
import {useSelector} from "react-redux";

const NavBar = () => {
  const user = useSelector(state => state.auth.currentUser);

  return (
    <div className={s.nav_bar}>
      <div className={s.user_info}>
        <Avatar src={user.avatar} styles={{height:'120px', width:'120px', margin: 'auto'}}/>
        <span className={s.user_name}>{user.fullName}</span>
        <span className={s.user_email}>{user.email}</span>
      </div>
      <NavLink to={routes.overview} className={s.nav_bar_item} activeClassName={s.selected}>
        <div className={s.nav_bar_icon}>
          {diagramIcon}
        </div>
        <span>Overview</span>
      </NavLink>
      <NavLink to={routes.tickets} className={s.nav_bar_item} activeClassName={s.selected}>
        <div className={s.nav_bar_icon}>
          {titcketIcon}
        </div>
        <span>Todo</span>
      </NavLink>
      <NavLink to={routes.ideas} className={s.nav_bar_item} activeClassName={s.selected}>
        <div className={s.nav_bar_icon}>
          {lampIcon}
        </div>
        <span>Ideas</span>
      </NavLink>
      <NavLink to={routes.contacts} className={s.nav_bar_item} activeClassName={s.selected}>
        <div className={s.nav_bar_icon}>
          {groupIcon}
        </div>
          <span>Contacts</span>
      </NavLink>
      <NavLink to={routes.agents} className={s.nav_bar_item} activeClassName={s.selected}>
        <div className={s.nav_bar_icon}>
          {agentIcon}
        </div>
        <span>Agents</span>
      </NavLink>
      <NavLink to={routes.articles} className={s.nav_bar_item} activeClassName={s.selected}>
        <div className={s.nav_bar_icon}>
          {bookIcon}
        </div>
        <span>Articles</span>
      </NavLink>
    </div>
)
};

export default NavBar;