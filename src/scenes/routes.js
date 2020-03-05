import React from 'react';
import {Switch, BrowserRouter, Route, Redirect} from 'react-router-dom';
import Auth from './Auth/Auth';
import Main from "./Main/Main";

export const routes = {
  home: '/',
  auth: '/auth',
  login: '/auth/login',
  register: '/auth/register',
  overview: '/overview',
  todo: '/todo',
  todoAll: '/todo/all',
  todoFavorites: '/todo/favorites',
  todoCompleted: '/todo/completed',
  weather: '/weather',
  contacts: '/contacts',
  agents: '/agents',
  articles: '/articles'
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.auth} component={Auth}/>
        <Route component={Main}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;