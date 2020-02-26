import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer";
import contactReducer from "./contactReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  contact: contactReducer,
});

export default rootReducer;