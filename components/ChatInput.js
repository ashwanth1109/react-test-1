import React from "react";
import { row, button } from "../styles";

import { connect } from "react-redux";

const mapStateFromProps = state => {
    return {
        currentUser: state.currentUser,
        room: state.rooms[state.room]
    };
};

const mapDispatchToProps = dispatch => ({
    addMessageToRoom: async (message, currentUser, roomId) => {
        try {
            await currentUser.sendMessage({
                text: message,
                roomId: roomId
            });
        } catch (err) {
            console.error(err);
        }
    }
});

const s = {
    container: {
        width: "100%",
        backgroundColor: "#222",
        ...row,
        padding: "30px 20px",
        boxSizing: "border-box",
        alignItems: "center"
    },
    input: {
        flex: "1",
        border: "2px solid #fff",
        borderRadius: "10px",
        marginRight: "20px",
        outline: "none",
        height: "30px",
        padding: "5px 10px",
        color: "#222",
        fontSize: "20px"
    }
};

class ChatInput extends React.Component {
    addMessage = ({ addMessageToRoom, currentUser, room } = this.props) => {
        addMessageToRoom(this.refs.message.value, currentUser, room.id);
        this.refs.message.value = "";
    };
    render() {
        return (
            <div style={s.container}>
                <input
                    type="text"
                    style={s.input}
                    ref="message"
                    placeholder="Enter message . . ."
                />
                <div
                    style={button}
                    className="btn"
                    onClick={() => this.addMessage()}
                >
                    SEND
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(ChatInput);
