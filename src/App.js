import React from 'react';
import s from './App.module.scss';
import Router from "./scenes/routes";

import {Provider} from 'react-redux';
import {store, persistor} from "./store/store";
import {PersistGate} from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={s.app}>
          <Router/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
