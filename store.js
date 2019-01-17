import { combineReducers } from "redux";

const test = (state = 0, action) =>
    action.type === "TEST" ? action.payload : state;

const user = (state = null, action) =>
    action.type === "UPDATE_USER" ? action.payload : state;

export default combineReducers({ test, user });
