import { updateState, getDefaultValueForMembers, users } from "./store";

export const mapStateFromProps = state => state;

export const mapDispatchToProps = dispatch => ({
    // send message to room [ChatInput]
    addMessageToRoom: async (message, currentUser, roomId) => {
        try {
            await currentUser.sendMessage({
                text: message,
                roomId: roomId
            });
        } catch (err) {
            console.error(err);
        }
    },
    closeModal: () => {
        updateState(dispatch, false, "MODAL");
        // reset selected icons
        updateState(
            dispatch,
            getDefaultValueForMembers(),
            "MEMBERS_TO_ADD_TO_ROOM"
        );
    },
    toggleSelected: (id, members) => {
        members[id] = !members[id];
        updateState(dispatch, members, "MEMBERS_TO_ADD_TO_ROOM");
    },
    createRoom: async (roomName, currentUser, selected, user) => {
        const usersToBeAdded = [];
        if (roomName !== "") {
            usersToBeAdded.push(users[user]); // current user
            for (let i = 0; i < selected.length; i++) {
                if (selected[i]) usersToBeAdded.push(users[i]);
            }
            try {
                const room = await currentUser.createRoom({
                    name: roomName,
                    addUserIds: usersToBeAdded
                });
                const rooms = currentUser.rooms;
                updateState(dispatch, rooms, "ROOMS");
                // close modal
                updateState(dispatch, false, "MODAL");
                // reset selected icons
                updateState(
                    dispatch,
                    getDefaultValueForMembers(),
                    "MEMBERS_TO_ADD_TO_ROOM"
                );
            } catch (err) {
                console.error(err);
            }
        } else console.log("Room Name should not be an empty string");
    },
    updateRoom: id => {
        updateState(dispatch, id, "UPDATE_ROOM");
    },
    updateMessages: messages => {
        updateState(dispatch, messages, "MESSAGES");
    },
    deleteRoom: async (roomId, currentUser) => {
        try {
            await currentUser.deleteRoom({
                roomId: roomId
            });
            const rooms = currentUser.rooms;
            updateState(dispatch, rooms, "ROOMS");
        } catch (err) {
            console.log(`Error in deleting room`);
        }
    },
    // common updateState function - replace it
    updateState: (payload, type) => {
        updateState(dispatch, payload, type);
    }
});
