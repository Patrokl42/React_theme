const initState = {
  contacts: {}
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_REQUEST':
      return {
        ... state,
        contacts: action.payload
      };

    default:
      return state;
  }
};

export default contactReducer;