// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { message as s } from "../componentStyles"; // component styles
// ------------------------------------------------------------
// Message component
// ------------------------------------------------------------
const Message = ({ message }) => (
    <div style={s.container}>
        {/* messsage chat box container */}
        <div style={s.message}>
            {/* display message sender */}
            <div style={s.messageSender}>{message.senderId.toUpperCase()}</div>
            {/* display the content of message */}
            <div style={s.messageBody}>{message.text}</div>
            {/* display image of sender */}
            <img
                src={`/static/${message.senderId}.png`}
                style={s.image}
                alt={message.senderId}
            />
        </div>
    </div>
);
// ------------------------------------------------------------
// export message as memoized component
// ------------------------------------------------------------
export default React.memo(Message);
