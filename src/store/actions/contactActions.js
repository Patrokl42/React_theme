import Api from '../../api';

export const getContacts = () => {
  return async (dispatch) => {
    try {
      const res = await Api.Contacts.getContacts();
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

export const createContact = (contact) => {
  return async (dispatch) => {
    try {
      console.log(contact);
    } catch (err) {
      console.log(err);
    }
  }
};