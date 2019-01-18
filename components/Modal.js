import React from "react";
import { fScreen, fCenter, col, smallText, row } from "../styles";

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
        },
        toggleSelected: (id, members) => {
            members[id] = !members[id];
            updateState(dispatch, members, "MEMBERS_TO_ADD_TO_ROOM");
        },
        resetSelected: () => {
            updateState(
                dispatch,
                getDefaultValueForMembers(),
                "MEMBERS_TO_ADD_TO_ROOM"
            );
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
        width: "100px",
        height: "35px",
        ...fCenter,
        border: "3px solid #fff",
        borderRadius: "10px",
        margin: "20px 10px",
        ...smallText,
        cursor: "pointer"
    }
};

class Modal extends React.Component {
    createRoom = async ({ currentUser, selected, closeModal } = this.props) => {
        // create a room
        // console.log(this.refs.roomName.value);
        if (this.refs.roomName.value !== "") {
            let usersToBeAdded = [];
            usersToBeAdded.push(users[this.props.user]); // current user
            for (let i = 0; i < selected.length; i++) {
                if (selected[i]) usersToBeAdded.push(users[i]);
            }
            console.log(usersToBeAdded);
            try {
                const room = await currentUser.createRoom({
                    name: this.refs.roomName.value,
                    addUserIds: usersToBeAdded
                });
                console.log(`Created room is ${room.name}`);
                closeModal();
                // Need to update room list
            } catch (err) {
                console.log("Error creating new room");
            }
        } else console.log("Room name should not be empty");
    };

    cancelModalForm = ({ closeModal, resetSelected } = this.props) => {
        closeModal();
        resetSelected();
    };

    render({ modal, selected, toggleSelected } = this.props) {
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
                                onClick={() => this.cancelModalForm()}
                            >
                                CANCEL
                            </div>
                            <div
                                style={s.button}
                                className="btn"
                                onClick={() => this.createRoom()}
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
