import { appApi } from '../../api';

export const userLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await appApi.Auth.login(email, password);
      appApi.Auth.setToken(res.data[0].token);
      dispatch(loginUser(res.data[0].user))
    } catch (err) {
      console.log(err);
    }
  }
};

const loginUser = user => ({
  type: 'LOGIN_USER',
  payload: user
});