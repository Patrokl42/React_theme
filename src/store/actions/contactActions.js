import { appApi } from '../../api';

export const getContacts = () => {
  return async (dispatch) => {
    try {
      const res = await appApi.Contacts.getContacts();
      dispatch(fetchedContacts(res.data))
    } catch (err) {
      console.log(err);
    }
  }
};

const fetchedContacts = contacts => ({
  type: 'FETCH_CONTACTS_REQUEST',
  payload: contacts
});

export const updateContact = contact => {
  return async (dispatch) => {
    try {
      const res = await appApi.Contacts.updateContact(contact);
      dispatch(updatedContact(contact))
    } catch (err) {
      console.log(err);
    }
  }
};

const updatedContact = contact => ({
  type: 'UPDATE_CONTACT',
  payload: contact
});

export const removeContact = contact => {
  return async (dispatch) => {
    try {
      const res = await appApi.Contacts.removeContact(contact.id);
      console.log(res);
      dispatch(removedContact(contact))
    } catch (err) {
      console.log(err);
    }
  }
}

const removedContact = contact => ({
  type: 'REMOVE_CONTACT',
  payload: contact
});