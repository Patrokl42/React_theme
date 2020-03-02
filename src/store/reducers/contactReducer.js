const initState = {
  contacts: {}
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_REQUEST':
      return {
        ...state,
        contacts: action.payload
      };

    case 'UPDATE_CONTACT':
      const updatedContact = action.payload;
      const updatedContacts = state.contacts.map(
        contact => contact.id === updatedContact.id ? updatedContact : contact
      );

      return {
        ...state,
        contacts: updatedContacts,
      };

    case 'REMOVE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload.id)
      };

    default:
      return state;
  }
};

export default contactReducer;