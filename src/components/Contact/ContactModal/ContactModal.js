import React from "react";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

import s from './ContactModal.module.scss';
import Avatar from "../../User/Avatar/Avatar";
import ModalInput from "../../Form/ModalInput/ModalInput";

const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(5, 'Too Short Name!')
    .max(50, 'Too Long!')
    .required('Required'),
  company: Yup.string()
    .min(5, 'Too Short Company Name!')
    .max(50, 'Too Long Company Name!'),
  email: Yup.string()
    .min(5, 'Too Short Email!')
    .max(50, 'Too Long!'),
  phoneNumber: Yup.string()
    .min(7, 'Too Short Number!')
    .max(14, 'Too Long Number!'),
  birthday: Yup.string()
    .min(7, 'Too Short Birthday Date!')
    .max(50, 'Too Long Birthday Date!'),
});

const ContactModal = ({onSubmit, contact, openModal}) => {
  return (
    <Formik
      initialValues={{
        id: contact.id,
        fullName: contact.fullName,
        email: contact.email,
        company: contact.company,
        phone: contact.phone,
        birthday: contact.birthday,
        avatar: contact.avatar
      }}
      validationSchema={ContactSchema}
      onSubmit={onSubmit}
    >
      <Form className={s.contact_modal}>
        <div className={s.modal_header}>
          <Avatar src={contact.avatar}/>
          <h6>{contact.fullName}</h6>
          <div
            className={s.close_modal}
            onClick={() => openModal(false)}
          >
            <span>x</span>
          </div>
        </div>
        <div className={s.modal_inputs}>
          <ModalInput
            label={'Full Name'}
            name='fullName'
          />
          <ModalInput
            label={'Company'}
            name='company'
          />
          <ModalInput
            label={'Email'}
            name='email'
          />
          <ModalInput
            label={'Phone Number'}
            name='phone'
          />
          <ModalInput
            label={'Birthday'}
            name='birthday'
          />
          <button type="submit" value='Submit' className={s.modal_submit}>
            Save
          </button>
        </div>
      </Form>
    </Formik>
  )
};

export default ContactModal;