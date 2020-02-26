import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import s from './ContactListItem.module.scss';
import Avatar from "../../User/Avatar/Avatar";

import ContactModal from "../ContactModal/ContactModal";
import {useDispatch, useSelector} from "react-redux";

const ContactListItem = ({contact}) => {
  const dispatch = useDispatch();
  const [isModalOpen, toggleModal] = useState(false);

  const onSubmit = (contact) => {
    toggleModal(false);
    console.log(contact);
  };

  const modal = (contact) => (
    ReactDOM.createPortal(
      <ContactModal onSubmit={onSubmit} contact={contact}/>,
      document.getElementById('contact-modal')
    )
  );

  return (
    <>
      <div className={s.contact_list_item} onClick={() => toggleModal(true)}>
        <input className={s.contact_checkbox} type="checkbox" id="scales" name="scales"/>
        <Avatar src={contact.avatar} styles={{height: '60px', width: '60px'}}/>
        <span className={s.contact_full_name}>{contact.fullName}</span>
        <span className={s.contact_company}>{contact.company}</span>
        <span className={s.contact_email}>{contact.email}</span>
        <span className={s.contact_phone}>{contact.phone}</span>
        <span className={s.contact_birthday}>{contact.birthday}</span>
      </div>

      {isModalOpen && modal(contact)}
  </>
  )
};

export default ContactListItem;