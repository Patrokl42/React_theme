import React from 'react';
import s from './List.module.scss';
import ListItem from "../ListItem/ListItem";

const List = ({ items }) => {
  console.log(items);
  return (
    <div className={s.list}>
      {
        items.map(item => {
          return <ListItem key={item.id} item={item}/>
        })
      }
    </div>
  )
};

export default List;