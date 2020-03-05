import React from 'react';
import s from './List.module.scss';
import ListItem from "../ListItem/ListItem";

import { withFilterItems } from '../hoc';

const List = ({ items }) => {
  return (
    <div className={s.list}>
      {
        items.map(item => {
          return <ListItem key={item.id} item={item} />
        })
      }
    </div>
  )
};

export default withFilterItems(List);