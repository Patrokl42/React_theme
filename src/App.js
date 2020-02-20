import React from 'react';
import s from './App.module.scss';
import Router from "./scenes/routes";

import { Provider } from 'react-redux';
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className={s.app}>
        <Router/>
      </div>
    </Provider>
  );
}

export default App;
