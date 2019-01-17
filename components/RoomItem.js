import React from "react";
import { fCenter, bg, col, center } from "../styles";
import { updateState } from "../actions";
import { connect } from "react-redux";

const mapStateFromProps = state => {
    console.log(state);
    return {
        selected: state.room
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateRoom: payload => {
            updateState(dispatch, payload, "UPDATE_ROOM");
        }
    };
};

const s = {
    container: {
        width: "90%",
        margin: "20px auto",
        height: "100px",
        ...col,
        ...center,
        border: "2px solid #fff",
        borderRadius: "10px",
        cursor: "pointer"
    },
    selected: {
        ...bg.white,
        color: "#222"
    },
    roomName: {
        fontSize: "24px",
        marginBottom: "10px"
    }
};

const RoomItem = ({ room, selected, id, updateRoom }) => {
    return (
        <div
            style={{ ...s.container, ...(selected === id ? s.selected : null) }}
            onClick={() => updateRoom(id)}
        >
            <div style={s.roomName}>{room.name}</div>
            <div>Created by: {room.createdByUserId}</div>
        </div>
    );
};

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(React.memo(RoomItem));
