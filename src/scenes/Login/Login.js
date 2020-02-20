import React from 'react';
import LoginForm from "./components/LoginForm";

const Login = () => {
    const onSubmit = ({ login, password }) => {
        console.log(login, password);
    };

    return(
        <LoginForm onSubmit={onSubmit}/>
    )
};

export default Login;