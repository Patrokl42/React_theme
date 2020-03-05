import React from "react";
import s from './NavGroup.module.scss';
import NavItem from "../NavItem/NavItem";

const NavGroup = ({title, items}) => {
  return (
    <div className={s.nav_group}>
      <h4 className={s.title}>{title}</h4>
      {
        items.map(item => {
          return <NavItem key={item.id} item={item}/>
        })
      }
    </div>
  )
};

export default NavGroup;