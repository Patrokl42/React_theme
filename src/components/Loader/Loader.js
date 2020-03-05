import React from 'react';
import s from './Loader.module.scss';

const Loader = () => (
  <div className={s.cssload_loader}>
    <div className={`${s.cssload_inner} ${s.cssload_one}`}></div>
    <div className={`${s.cssload_inner} ${s.cssload_two}`}></div>
    <div className={`${s.cssload_inner} ${s.cssload_three}`}></div>
  </div>
);

export default Loader;