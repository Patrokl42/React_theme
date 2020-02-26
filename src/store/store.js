import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initState = {};

const persistConfig = {
  key: 'root',
  storage
};

const middlewares = [thunk];

const persisitedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persisitedReducer,
  initState,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export const persistor = persistStore(store);