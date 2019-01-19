// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { modal as s } from "../componentStyles"; // component styles
import { users } from "../store"; // users data array
import withRedux from "./Redux"; // withRedux HOC
// ------------------------------------------------------------
// Modal Component
// ------------------------------------------------------------
class Modal extends React.Component {
    render(
        {
            modal,
            membersToAddToRoom,
            toggleSelected,
            closeModal,
            currentUser,
            user,
            createRoom
        } = this.props
    ) {
        if (modal) {
            return (
                <div style={s.container}>
                    <div style={s.modalForm}>
                        <div style={s.modalTitle}>Create a new room:</div>
                        <div style={s.modalRow}>
                            <div style={s.modalLabel}>Room Name:</div>
                            <input
                                type="text"
                                style={s.modalInput}
                                ref="roomName"
                            />
                        </div>
                        <div style={s.modalTitle}>Add members</div>
                        <div style={s.memberGrid}>
                            {users.map((user, id) => {
                                if (id !== this.props.user) {
                                    return (
                                        <img
                                            key={id}
                                            src={`/static/${user}.png`}
                                            style={{
                                                ...s.icon,
                                                ...(membersToAddToRoom[id]
                                                    ? s.selected
                                                    : s.unselected)
                                            }}
                                            alt={user}
                                            onClick={() =>
                                                toggleSelected(
                                                    id,
                                                    membersToAddToRoom
                                                )
                                            }
                                        />
                                    );
                                } else return null;
                            })}
                        </div>
                        <div style={s.buttonContainer}>
                            <div
                                style={s.button}
                                className="btn"
                                onClick={closeModal}
                            >
                                CANCEL
                            </div>
                            <div
                                style={s.button}
                                className="btn"
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
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else return null;
    }
}

export default withRedux(Modal, true, true);
