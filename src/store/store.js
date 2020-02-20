import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';

const middlewares = [thunk];

const initState = {};

export const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(...middlewares)
);