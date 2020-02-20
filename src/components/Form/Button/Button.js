import React from "react";
import s from './Button.module.scss';

const Button = ({ title }) => (
  <button className={s.button} type='submit' value='Submit'>
    {title}
  </button>
);

export default Button;