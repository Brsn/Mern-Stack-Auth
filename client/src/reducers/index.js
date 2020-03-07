import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducer({
    auth: authReducer,
    errors: errorReducer
});