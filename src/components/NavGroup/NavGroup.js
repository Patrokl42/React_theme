import React from "react";
import s from './NavGroup.module.scss';
import NavItem from "../NavItem/NavItem";

const NavGroup = ({title, items}) => {
  console.log(items);
  return (
    <div className={s.nav_group}>
      <h4 className={s.title}>{title}</h4>
      {
        items.map(item => {
          return <NavItem icon={item.icon} title={item.title}/>
        })
      }
    </div>
  )
};

export default NavGroup;