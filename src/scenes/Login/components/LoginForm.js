import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import s from './LoginForm.module.scss';
import Input from "../../../components/Form/Input/Input";
import Button from "../../../components/Form/Button/Button";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, 'Too Short Email!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short Password!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const LoginForm = ({onSubmit}) => (
  <div className={s.login_wrapper}>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h1 className={s.form_title}>Login</h1>
        <h5 className={s.form_subtitle}>Enter your Username and Password</h5>
        <Input
          label='Email'
          name='email'
          placeholder='test@gmail.com'
        />
        <Input label={'Password'} name='password' placeholder='*******' />
        <Button title={'Login'} />
      </Form>
    </Formik>
  </div>
);

export default LoginForm;