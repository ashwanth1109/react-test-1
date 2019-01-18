import React from "react";
import { fCenter, bg, col, center } from "../styles";
import { updateState } from "../actions";
import { connect } from "react-redux";

const mapStateFromProps = state => {
    console.log(state);
    return {
        selected: state.room,
        currentUser: state.currentUser,
        rooms: state.rooms,
        messages: state.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateRoom: id => {
            console.log(id);
            updateState(dispatch, id, "UPDATE_ROOM");
        },
        updateMessages: messages => {
            updateState(dispatch, messages, "MESSAGES");
        },
        deleteRoom: async (roomId, currentUser) => {
            try {
                console.log(`${roomId} is room id`);
                await currentUser.deleteRoom({
                    roomId: roomId
                });
                const rooms = currentUser.rooms;
                updateState(dispatch, rooms, "ROOMS");
            } catch (err) {
                console.log(`Error in deleting room`);
            }
        }
    };
};

const s = {
    container: {
        width: "90%",
        margin: "10px auto",
        height: "80px",
        ...col,
        ...center,
        border: "2px solid #fff",
        borderRadius: "10px",
        cursor: "pointer",
        position: "relative"
    },
    selected: {
        ...bg.white,
        color: "#222"
    },
    roomName: {
        fontSize: "24px",
        marginBottom: "10px"
    },
    delete: {
        position: "absolute",
        width: "30px",
        height: "30px",
        top: "0px",
        right: "0px"
    }
};

class RoomItem extends React.Component {
    changeRoom = async ({ id, rooms, currentUser } = this.props) => {
        this.props.updateRoom(id);
        try {
            const messages = await currentUser.fetchMessages({
                roomId: rooms[id].id,
                initialId: 0,
                direction: "newer",
                limit: 100
            });
            this.props.updateMessages(messages);
            await currentUser.subscribeToRoom({
                roomId: rooms[id].id,
                messageLimit: 100,
                hooks: {
                    onMessage: message => {
                        console.log(this.props);
                        this.props.updateMessages([
                            ...this.props.messages,
                            message
                        ]);
                    }
                }
            });
        } catch (err) {
            console.error(err);
        }
    };

    render = ({ room, selected, id, deleteRoom, currentUser } = this.props) => {
        return (
            <div
                style={{
                    ...s.container,
                    ...(selected === id ? s.selected : null)
                }}
                onClick={() => this.changeRoom()}
            >
                <div style={s.roomName}>{room.name}</div>
                <div>Created by: {room.createdByUserId}</div>
                {selected === id ? (
                    <img
                        src="/static/delete.svg"
                        style={s.delete}
                        alt="delete"
                        onClick={() => {
                            deleteRoom(room.id, currentUser);
                        }}
                    />
                ) : null}
            </div>
        );
    };
}

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(RoomItem);
