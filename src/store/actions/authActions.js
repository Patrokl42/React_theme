import Api from '../../api';

export const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await Api.Auth.login(email, password);
      Api.Auth.setToken(res.data.token);
      dispatch(loginUser(res.data.user))
    } catch (err) {
      console.log(err);
    }
  }
};

const loginUser = user => ({
  type: 'LOGIN_USER',
  payload: user
});