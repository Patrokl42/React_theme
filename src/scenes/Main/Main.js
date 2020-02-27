import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import { Switch, Route } from 'react-router-dom';
import { routes } from '../routes';
import Contacts from "../Contacts/Contacts";
import Overview from "../Owerview/Owerview";
import s from './Main.module.scss';

const Main = () => {
    return (
        <div className={s.main_wrapper}>
          <NavBar/>

          <div className={s.main_contentent}>
            <Switch>
              <Route path={routes.contacts} component={Contacts}/>
              <Route path={routes.overview} component={Overview}/>
            </Switch>
          </div>

        </div>
    )
};

export default Main;