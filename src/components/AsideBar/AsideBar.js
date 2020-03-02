import React from "react";

import s from './AsideBar.module.scss';
import NavGroup from "../NavGroup/NavGroup";

const AsideBar = ({items}) => {
  return (
    <div className={s.aside}>
      {
        items.map(item => {
          return <NavGroup key={item.key} title={item.title} items={item.categories}/>
        })
      }
    </div>
  )
};

export default AsideBar;