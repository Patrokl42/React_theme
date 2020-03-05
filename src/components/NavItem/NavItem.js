import React from "react";
import s from './NavItem.module.scss';

import { NavLink } from "react-router-dom";

const NavItem = ({ item }) => {
  return (
    <>
      <NavLink to={item.navigateTo} className={s.nav_item} activeClassName={s.nav_active}>
        <span className={s.icon}>{item.icon}</span>
        <span className={s.title}>{item.title}</span>
      </NavLink>
    </>
  )
};

export default NavItem;