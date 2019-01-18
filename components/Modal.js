import React from "react";
import { fScreen, fCenter, col, smallText, row, button } from "../styles";

import { connect } from "react-redux";
import { updateState } from "../actions";

import { users, getDefaultValueForMembers } from "../store";

const mapStateFromProps = state => {
    return {
        modal: state.modal,
        selected: state.membersToAddToRoom,
        currentUser: state.currentUser,
        user: state.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
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
        createRoom: async (
            roomName,
            currentUser,
            selected,
            user,
            usersToBeAdded = []
        ) => {
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
                    console.log(`Created room is ${room.name}`);
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
        }
    };
};

const s = {
    container: {
        position: "absolute",
        ...fScreen,
        backgroundColor: "#22222280",
        ...fCenter
    },
    modalForm: {
        width: "500px",
        backgroundColor: "#222",
        borderRadius: "10px",
        ...col,
        alignItems: "center",
        padding: "20px"
    },
    modalTitle: {
        ...smallText
    },
    modalRow: {
        ...row,
        margin: "20px 0"
    },
    modalLabel: {
        ...smallText,
        marginRight: "20px"
    },
    modalInput: {
        width: "200px",
        outline: "none",
        padding: "3px 10px",
        fontSize: "16px"
    },
    memberGrid: {
        marginTop: "10px",
        width: "60%",
        display: "grid",
        gridRowGap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))"
    },
    icon: {
        width: "60px",
        height: "60px",
        margin: "0 auto",
        cursor: "pointer",
        borderRadius: "30px"
    },
    selected: {
        border: "2px solid #fff"
    },
    unselected: {
        border: "2px solid #ffffff00"
    },
    buttonContainer: {
        ...row,
        width: "100%",
        justifyContent: "center"
    },
    button: {
        ...button,
        margin: "20px 10px"
    }
};

class Modal extends React.Component {
    render(
        {
            modal,
            selected,
            toggleSelected,
            closeModal,
            currentUser,
            user,
            createRoom
        } = this.props
    ) {
        if (modal) {
            return (
                <div style={s.container}>
                    <div style={s.modalForm}>
                        <div style={s.modalTitle}>Create a new room:</div>
                        <div style={s.modalRow}>
                            <div style={s.modalLabel}>Room Name:</div>
                            <input
                                type="text"
                                style={s.modalInput}
                                ref="roomName"
                            />
                        </div>
                        <div style={smallText}>Add members</div>
                        <div style={s.memberGrid}>
                            {users.map((user, id) => {
                                if (id !== this.props.user) {
                                    return (
                                        <img
                                            key={id}
                                            src={`/static/${user}.png`}
                                            style={{
                                                ...s.icon,
                                                ...(selected[id]
                                                    ? s.selected
                                                    : s.unselected)
                                            }}
                                            alt={user}
                                            onClick={() =>
                                                toggleSelected(id, selected)
                                            }
                                        />
                                    );
                                } else return null;
                            })}
                        </div>
                        <div style={s.buttonContainer}>
                            <div
                                style={s.button}
                                className="btn"
                                onClick={() => closeModal()}
                            >
                                CANCEL
                            </div>
                            <div
                                style={s.button}
                                className="btn"
                                onClick={() =>
                                    createRoom(
                                        this.refs.roomName.value,
                                        currentUser,
                                        selected,
                                        user
                                    )
                                }
                            >
                                CREATE
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else return null;
    }
}

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(Modal);
