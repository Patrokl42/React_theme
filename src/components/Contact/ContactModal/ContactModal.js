import React from "react";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import s from './ContactModal.module.scss';
import Avatar from "../../User/Avatar/Avatar";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(10, 'Too Short Name!')
    .max(50, 'Too Long!')
    .required('Required'),
  company: Yup.string()
    .min(10, 'Too Short Company Name!')
    .max(50, 'Too Long Company Name!'),
  email: Yup.string()
    .min(5, 'Too Short Email!')
    .max(50, 'Too Long!'),
  phoneNumber: Yup.string()
    .min(7, 'Too Short Number!')
    .max(8, 'Too Long Number!'),
  birthday: Yup.string()
    .min(7, 'Too Short Birthday Date!')
    .max(10, 'Too Long Birthday Date!'),
});

const ContactModal = ({onSubmit, contact}) => {
  return (
    <Formik
      initialValues={{
        fullName: contact.fullName,
        email: contact.email,
        company: contact.company,
        phoneNumber: contact.phone,
        birthday: contact.birthday,
      }}
      // validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.contact_modal}>
        <div className={s.modal_header}>
          <Avatar src={contact.avatar}/>
          <h6>{contact.fullName}</h6>
        </div>
        <div className={s.modal_inputs}>
          <div className={s.input_name}>
            <label>Full Name</label>
            <input type="text" name='fullName' />
          </div>
          <div className={s.input_company}>
            <label>Company</label>
            <input type="text" name='company' />
          </div>
          <div className={s.input_email}>
            <label>Email</label>
            <input type="text" name='email' />
          </div>
          <div className={s.input_phone}>
            <label>Phone Number</label>
            <input type="text" name='phoneNumber'/>
          </div>
          <div className={s.input_birthday}>
            <label>Birthday</label>
            <input type="text" name='birthday'/>
          </div>
          <button type="submit" value='Submit' className={s.modal_submit}>
            Save
          </button>
        </div>
      </Form>
    </Formik>
  )
};

export default ContactModal;