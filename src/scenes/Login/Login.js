import React from 'react';
import LoginForm from "./components/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router';

import { userLogin } from "../../store/actions/authActions";
import { routes } from '../routes';

const Login = () => {
  const user = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = ({email, password}) => {
    dispatch(userLogin(email, password));

    user.fullName ? history.push(routes.home) : console.log(user);

  };

  return (
    <LoginForm onSubmit={onSubmit}/>
  )
};

export default Login;