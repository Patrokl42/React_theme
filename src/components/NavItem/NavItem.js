import React from "react";
import s from './NavItem.module.scss';

import { favoriteIcon } from "../Icons/Icons";

const NavItem = ({title, icon}) => {
  return (
    <div className={s.nav_item}>
      <span className={s.icon}>{icon}</span>
      <span className={s.title}>{title}</span>
    </div>
  )
};

export default NavItem;