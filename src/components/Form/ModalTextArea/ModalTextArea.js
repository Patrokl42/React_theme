import React from "react";
import { useField } from "formik";
import s from './ModalTextArea.module.scss';

const ModalTextArea = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className={s.input_wrapper}>
      <label className={s.label}>{label}</label>
      <textarea className={s.input} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};


export default ModalTextArea;