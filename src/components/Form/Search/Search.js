import React from 'react';
import { searchIcon } from '../../Icons/Icons';

import s from './Search.module.scss';

const Search = () => {

  const search = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className={s.search_box}>
      <div className={s.search_icon}>
        {searchIcon}
      </div>
      <input
        className={s.search}
        placeholder={'Search'}
        onChange={(e) => search(e)}
      />
    </div>
  )
};

export default Search;