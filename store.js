import { combineReducers } from "redux";

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

// ------------------------------------------------------------
// members list default
// ------------------------------------------------------------
export const getDefaultValueForMembers = (initialMembersList = []) => {
    for (let i = 0; i < 7; i++) {
        initialMembersList.push(false);
    }
    return initialMembersList;
};

// ------------------------------------------------------------
// common action dispatcher
// ------------------------------------------------------------
export const updateState = (dispatch, payload, type) =>
    dispatch({
        type: type,
        payload: payload
    });

// ------------------------------------------------------------
// reducers store
// ------------------------------------------------------------
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
    action.type === "ROOMS" ? [...action.payload] : state;

const currentRoom = (state = null, action) =>
    action.type === "CURRENT_ROOM" ? action.payload : state;

const messages = (state = [], action) =>
    action.type === "MESSAGES" ? action.payload : state;

const modal = (state = false, action) =>
    action.type === "MODAL" ? action.payload : state;

const membersToAddToRoom = (state = getDefaultValueForMembers(), action) =>
    action.type === "MEMBERS_TO_ADD_TO_ROOM" ? [...action.payload] : state;

const roomListLoading = (state = false, action) =>
    action.type === "ROOM_LIST_LOADING" ? action.payload : state;

const chatMessagesLoading = (state = false, action) =>
    action.type === "CHAT_MESSAGES_LOADING" ? action.payload : state;

export default combineReducers({
    test,
    user,
    room,
    currentUser,
    rooms,
    currentRoom,
    messages,
    modal,
    membersToAddToRoom,
    roomListLoading,
    chatMessagesLoading
});
