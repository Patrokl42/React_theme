import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { getContacts } from "../../../../store/actions/contactActions";
import ContactListItem from "../../../../components/Contact/ContactListItem/ContactListItem";

import s from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  console.log(contacts);

  return (
    <div>
      <ul className={s.contact_list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <ContactListItem contact={contact}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default ContactList;