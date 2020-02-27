import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import s from './ContactTableItem.module.scss';
import Avatar from "../../User/Avatar/Avatar";

import ContactModal from "../ContactModal/ContactModal";
import {useDispatch} from "react-redux";
import {updateContact, removeContact} from "../../../store/actions/contactActions";

const ContactTableItem = ({contact}) => {
  const dispatch = useDispatch();
  const [isModalOpen, toggleModal] = useState(false);

  const onSubmit = (contact) => {
    toggleModal(false);
    console.log(contact);
    dispatch(updateContact(contact));
  };

  const modal = (contact) => (
    ReactDOM.createPortal(
      <ContactModal onSubmit={onSubmit} contact={contact} openModal={toggleModal}/>,
      document.getElementById('modal')
    )
  );

  return (
    <>
      <tr className={s.contact_table_item} onClick={() => toggleModal(true)}>
        <td>
          <Avatar src={contact.avatar} styles={{height: '60px', width: '60px'}}/>
        </td>
        <td>
          <span className={s.contact_full_name}>{contact.fullName}</span>
        </td>
        <td>
          <span className={s.contact_company}>{contact.company}</span>
        </td>
        <td>
          <span className={s.contact_email}>{contact.email}</span>
        </td>
        <td>
          <span className={s.contact_phone}>{contact.phone}</span>
        </td>
        <td>
          <span className={s.contact_birthday}>{contact.birthday}</span>
        </td>
        <td onClick={() => dispatch(removeContact(contact))}>
          Delete
        </td>
      </tr>
      {isModalOpen && modal(contact)}
    </>
  )
};

export default ContactTableItem;