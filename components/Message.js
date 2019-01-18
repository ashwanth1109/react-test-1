import React from "react";
import { col, smallText } from "../styles";

const s = {
    container: {
        width: "100%",
        padding: "50px 10px 0 40px",
        boxSizing: "border-box",
        ...col
    },
    message: {
        width: "100%",
        backgroundColor: "#222",
        borderRadius: "10px",
        position: "relative"
    },
    image: {
        position: "absolute",
        width: "80px",
        height: "80px",
        borderRadius: "40px",
        top: "-40px",
        left: "-20px",
        border: "2px solid #fff"
    },
    messageBody: {
        padding: "10px 10px 20px 70px",
        fontSize: "20px"
    }
};

class Message extends React.Component {
    render({ message } = this.props) {
        console.log(message.senderId);
        return (
            <div style={s.container}>
                <div style={s.message}>
                    <div
                        style={{
                            width: "100%",
                            height: "40px",
                            ...smallText,
                            padding: "0 0 0 70px"
                        }}
                    >
                        {message.senderId.toUpperCase()}
                    </div>
                    <div style={s.messageBody}>{message.text}</div>
                    <img
                        src={`/static/${message.senderId}.png`}
                        style={s.image}
                        alt={message.senderId}
                    />
                </div>
            </div>
        );
    }
}

export default Message;
