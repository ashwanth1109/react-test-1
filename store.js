import { combineReducers } from "redux";

const test = (state = 0, action) =>
    action.type === "TEST" ? action.payload : state;

const user = (state = null, action) =>
    action.type === "UPDATE_USER" ? action.payload : state;

const room = (state = null, action) =>
    action.type === "UPDATE_ROOM" ? action.payload : state;

// i know this seems redundant but i think it helps to not overwrite user reducer
const currentUser = (state = null, action) =>
    action.type === "CURRENT_USER" ? action.payload : state;

const rooms = (state = [], action) =>
    action.type === "ROOMS" ? action.payload : state;

const currentRoom = (state = null, action) =>
    action.type === "CURRENT_ROOM" ? action.payload : state;

const messages = (state = [], action) =>
    action.type === "MESSAGES" ? action.payload : state;

export default combineReducers({
    test,
    user,
    room,
    currentUser,
    rooms,
    currentRoom,
    messages
});

// ------------------------------------------------------------
// data store
// ------------------------------------------------------------
export const users = [
    "aquaman",
    "batman",
    "flash",
    "green-lantern",
    "martian-manhunter",
    "superman",
    "wonder-woman"
];
