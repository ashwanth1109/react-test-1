// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withLayout from "../components/Layout"; // Layout HOC
import { chat as s } from "../componentStyles"; // chat page styles
import { navigateToIndex, getChatManagerClient } from "../utilityFunctions"; // utility functions
// ------------------------------------------------------------
// import child components
// ------------------------------------------------------------
import RoomList from "../components/RoomList"; // shows list of rooms
import UserList from "../components/UserList"; // shows list of users in room
import Modal from "../components/Modal"; // modal with create room form
import ChatMessages from "../components/ChatMessages"; // shows list of messages in room
import ChatInput from "../components/ChatInput"; // chat input to send new message to chat

// ------------------------------------------------------------
// Chat Page Component
// ------------------------------------------------------------
class Chat extends React.Component {
    // ------------------------------------------------------------
    // When component mounts, instantiate chat manager & connect to it
    // Once connected update currentUser and currentRooms in global state
    // ------------------------------------------------------------
    async componentDidMount({ user, updateState } = this.props) {
        if (user === null) navigateToIndex();
        else {
            const chatManager = getChatManagerClient(user);
            const currentUser = await chatManager.connect();
            updateState(currentUser, "CURRENT_USER");
            const rooms = currentUser.rooms;
            updateState(rooms, "ROOMS");
        }
    }

    // ------------------------------------------------------------
    // check if user is null, if null render return null
    // else return chat page ui
    // ------------------------------------------------------------
    render = ({ user } = this.props) =>
        user === null ? null : (
            <div style={s.container}>
                {/* left portion of window for room list and user list */}
                <div style={s.userRoomList}>
                    <RoomList />
                    <UserList />
                </div>
                {/* right portion of window for chat messages list and chat input */}
                <div style={s.chatMessages}>
                    <ChatMessages />
                    <ChatInput />
                </div>
                {/* modal absolutely positioned */}
                <Modal />
            </div>
        );
}

// ------------------------------------------------------------
// export chat page with layout and page title
// ------------------------------------------------------------
export default withLayout(Chat, "The League Channel");
