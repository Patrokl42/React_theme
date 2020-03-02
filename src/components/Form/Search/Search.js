import React from 'react';
import {searchIcon} from '../../Icons/Icons';

import s from './Search.module.scss';

const Search = () => {
  return (
    <div className={s.search_box}>
      <div className={s.search_icon}>
        {searchIcon}
      </div>
      <input
        className={s.search}
        placeholder={'Search'}
      />
    </div>
  )
};

export default Search;