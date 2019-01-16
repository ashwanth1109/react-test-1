import { combineReducers } from "redux";

const test = (state = 0, action) =>
    action.type === "TEST" ? action.payload : state;

export default combineReducers({ test });
