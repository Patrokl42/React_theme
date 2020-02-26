import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes'
import Register from "../Register/Register";
import Login from "../Login/Login";

const Auth = () => {
    return (
        <>
            <Switch>
                <Route path={routes.login} component={Login}/>
                <Route path={routes.register} component={Register}/>
            </Switch>
        </>
    );
}

export default Auth;