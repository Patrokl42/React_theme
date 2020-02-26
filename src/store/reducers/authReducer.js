const initState = {
  currentUser: {}
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
};

export default authReducer;