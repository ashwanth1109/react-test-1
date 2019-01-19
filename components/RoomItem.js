import { roomItem as s } from "../componentStyles";
import withRedux from "./Redux";

class RoomItem extends React.Component {
    changeRoom = async (
        { id, rooms, currentUser, updateState } = this.props
    ) => {
        updateState(id, "UPDATE_ROOM");
        try {
            updateState(true, "CHAT_MESSAGES_LOADING");
            this.props.updateMessages([]);
            await currentUser.fetchMessages({
                roomId: rooms[id].id,
                initialId: 0,
                direction: "newer",
                limit: 100
            });
            await currentUser.subscribeToRoom({
                roomId: rooms[id].id,
                messageLimit: 100,
                hooks: {
                    onMessage: message => {
                        this.props.updateMessages([
                            ...this.props.messages,
                            message
                        ]);
                    }
                }
            });
            updateState(false, "CHAT_MESSAGES_LOADING");
        } catch (err) {
            console.error(err);
        }
    };

    render = ({ roomItem, room, id } = this.props) => {
        return (
            <div
                style={{
                    ...s.container,
                    ...(room === id ? s.selected : null)
                }}
                onClick={() => this.changeRoom()}
            >
                <div style={s.roomName}>{roomItem.name}</div>
                <div>Created by: {roomItem.createdByUserId}</div>
            </div>
        );
    };
}

export default withRedux(RoomItem, true, true);
