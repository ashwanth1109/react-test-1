// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Chatkit from "@pusher/chatkit-client"; // Pusher Chatkit Client
import Router from "next/router"; // Next Router
import { users } from "./store"; // user data array
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Message from "./components/Message"; // Message Component for individual messages

// ------------------------------------------------------------
// component utility functions
// ------------------------------------------------------------
// navigate to chat page [pages/index]
export const navigateToChat = user =>
    user !== null ? Router.push("/chat") : null;

// navigate to index page [pages/chat]
export const navigateToIndex = () => Router.push("/");

// instantiate chat manager [pages/chat]
export const getChatManagerClient = user => {
    return new Chatkit.ChatManager({
        instanceLocator: process.env.PUSHER_APP_INSTANCE,
        userId: users[user],
        tokenProvider: new Chatkit.TokenProvider({
            url: process.env.PUSHER_APP_TOKEN
        })
    });
};

// rowRenderer function for react virtualized list to display chat messages
export const renderChatMessages = ({ key, index, style }, messages) => (
    <div key={key} style={style}>
        <Message message={messages[index]} />
    </div>
);
