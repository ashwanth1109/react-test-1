// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { chatInput as s } from "../componentStyles"; // component styles
import withRedux from "./Redux"; // with redux HOC
// ------------------------------------------------------------
// Chat Input Component - to enter new chat message and send
// issue - cannot convert it to stateless component as refs cannot be applied to stateless
// ------------------------------------------------------------
class ChatInput extends React.Component {
    render({ addMessageToRoom, currentUser, room, rooms } = this.props) {
        return (
            <div style={s.container}>
                {/* input message here */}
                <input
                    type="text"
                    style={s.input}
                    ref="message"
                    placeholder="Enter message . . ."
                />
                {/* send button here - adds message to room */}
                <div
                    style={s.button}
                    className="btn"
                    onClick={() => {
                        addMessageToRoom(
                            this.refs.message.value,
                            currentUser,
                            rooms[room].id
                        );
                        this.refs.message.value = "";
                    }}
                >
                    SEND
                </div>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export with redux HOC - with mapState and mapDispatch
// ------------------------------------------------------------
export default withRedux(ChatInput, true, true);
