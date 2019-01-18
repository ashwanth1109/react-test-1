import React from "react";
import { row, button } from "../styles";

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
    render() {
        return (
            <div style={s.container}>
                <input
                    type="text"
                    style={s.input}
                    ref="message"
                    placeholder="Enter message . . ."
                />
                <div style={button} className="btn">
                    SEND
                </div>
            </div>
        );
    }
}

export default ChatInput;
