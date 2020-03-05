import { combineReducers } from "redux";

import authReducer from "./authReducer";
import userReducer from "./userReducer";
import contactReducer from "./contactReducer";
import todoReducer from "./todosReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  contact: contactReducer,
  todo: todoReducer,
  weather: weatherReducer,
});

export default rootReducer;