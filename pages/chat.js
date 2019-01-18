import withLayout from "../components/Layout";
import Chatkit from "@pusher/chatkit-client";
import { users } from "../store";
import Router from "next/router";
import { row, bg, col } from "../styles";
import RoomList from "../components/RoomList";
import UserList from "../components/UserList";
import Modal from "../components/Modal";
import ChatMessages from "../components/ChatMessages";
import ChatInput from "../components/ChatInput";

const s = {
    container: {
        height: "100vh",
        ...row,
        margin: "0 auto"
    },
    userRoomList: {
        flex: 1,
        ...col,
        borderRight: "1px solid #fff"
    },
    chatMessages: {
        flex: 2.5,
        ...bg.white,
        ...col
    }
};

class Chat extends React.Component {
    async componentDidMount({ user, updateState } = this.props) {
        console.log(process.env.PUSHER_APP_INSTANCE);
        console.log(process.env.PUSHER_APP_TOKEN);
        if (user === null) {
            Router.push("/");
        } else {
            const chatManager = new Chatkit.ChatManager({
                instanceLocator: process.env.PUSHER_APP_INSTANCE,
                userId: users[user],
                tokenProvider: new Chatkit.TokenProvider({
                    url: process.env.PUSHER_APP_TOKEN
                })
            });

            const currentUser = await chatManager.connect();
            updateState(currentUser, "CURRENT_USER");
            const rooms = currentUser.rooms;
            updateState(rooms, "ROOMS");
            // const currentRoom = await currentUser.subscribeToRoom({
            //     roomId: process.env.LEAGUE_ROOM,
            //     messageLimit: 100,
            //     hooks: {
            //         onMessage: message => {
            //             this.setState({
            //                 messages: [...messages, message]
            //             });
            //         }
            //     }
            // });
            // updateState(currentRoom, "CURRENT_ROOM");
        }
    }

    render({ user } = this.props) {
        if (user === null) {
            return null;
        } else {
            return (
                <div style={s.container}>
                    <div style={s.userRoomList}>
                        <RoomList />
                        <UserList />
                    </div>
                    <div style={s.chatMessages}>
                        <ChatMessages />
                        <ChatInput />
                    </div>
                    <Modal />
                </div>
            );
        }
    }
}

export default withLayout(Chat, "The League Channel");
