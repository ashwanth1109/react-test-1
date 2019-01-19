// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { createRoomForm as s } from "../componentStyles";
import UserGrid from "./UserGrid";
import Button from "./Button";
import withRedux from "./Redux";
// ------------------------------------------------------------
// Create Room Form Component
// ------------------------------------------------------------
class CreateRoomForm extends React.Component {
    render = (
        { closeModal, createRoom, membersToAddToRoom, user, currentUser } = this
            .props
    ) => {
        return (
            <React.Fragment>
                <div style={s.title}>Create a new room:</div>
                <div style={s.inputRow}>
                    <div style={s.label}>Room Name:</div>
                    <input type="text" style={s.input} ref="roomName" />
                </div>
                <div style={s.title}>Add members</div>
                <UserGrid />
                <div style={s.buttons}>
                    <Button onClick={closeModal}>CANCEL</Button>
                    <Button
                        onClick={() =>
                            createRoom(
                                this.refs.roomName.value,
                                currentUser,
                                membersToAddToRoom,
                                user
                            )
                        }
                    >
                        CREATE
                    </Button>
                </div>
            </React.Fragment>
        );
    };
}
// ------------------------------------------------------------
// export withRedux - mapState & mapDispatch
// ------------------------------------------------------------
export default withRedux(CreateRoomForm, true, true);
