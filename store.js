import { combineReducers } from "redux";

const test = (state = 0, action) =>
    action.type === "TEST" ? action.payload : state;

const user = (state = null, action) =>
    action.type === "UPDATE_USER" ? action.payload : state;

export default combineReducers({ test, user });

// ------------------------------------------------------------
// data store
// ------------------------------------------------------------
export const users = [
    "aquaman",
    "batman",
    "flash",
    "glantern",
    "mmanhunter",
    "superman",
    "wwoman"
];
