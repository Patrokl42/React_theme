import { combineReducers } from "redux";

import authReducer from "./authReducer";
import userReducer from "./userReducer";
import contactReducer from "./contactReducer";
import todoReducer from "./todosReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  contact: contactReducer,
  todo: todoReducer
});

export default rootReducer;