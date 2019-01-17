import withLayout from "../components/Layout";
import axios from "axios";
import Chatkit from "@pusher/chatkit-client";
import { users } from "../store";

class Chat extends React.Component {
    state = {
        chats: []
    };

    componentDidMount({ user } = this.props) {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: process.env.PUSHER_APP_INSTANCE,
            userId: users[user]
        });
    }

    render() {
        return (
            <div>
                <div>Chat Page</div>
            </div>
        );
    }
}

export default withLayout(Chat, "The League Channel");
