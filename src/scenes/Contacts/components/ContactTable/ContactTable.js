import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../../../store/actions/contactActions";
import ContactTableItem from "../../../../components/Contact/ContactTableItem/ContactTableItem";
import Loader from "../../../../components/Loader/Loader";

import s from './ContactTable.module.scss';

const ContactTable = () => {
  const contacts = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  console.log(contacts);

  return contacts.length === undefined
    ?
    <Loader/>
    : (
    <table className={s.contact_table}>
      <thead>
      <tr className={s.contact_table_header}>
        <th>Avatar</th>
        <th>Full Name</th>
        <th>Company</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Birthday</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {contacts.map(contact => {
        return (
          <ContactTableItem contact={contact} key={contact.id}/>
        )
      })}
      </tbody>
    </table>
  )
};

export default ContactTable;