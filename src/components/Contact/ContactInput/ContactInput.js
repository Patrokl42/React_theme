import React from "react";
import {useField} from "formik";
import s from './ContactInput.module.scss';

const ContactInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.input_wrapper}>
      <label className={s.label}>{label}</label>
      <input className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};


export default ContactInput;