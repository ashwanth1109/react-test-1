// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { userGrid as s } from "../componentStyles";
import { users as userIcons } from "../store";
import withRedux from "./Redux";
// ------------------------------------------------------------
// User Grid Component
// ------------------------------------------------------------
const UserGrid = ({ user, toggleSelected, membersToAddToRoom }) => (
    <div style={s.container}>
        {userIcons.map((userIcon, id) => {
            if (id !== user) {
                return (
                    <img
                        key={id}
                        src={`/static/${userIcon}.png`}
                        style={{
                            ...s.icon,
                            ...(membersToAddToRoom[id]
                                ? s.selected
                                : s.unselected)
                        }}
                        alt={userIcon}
                        onClick={() => toggleSelected(id, membersToAddToRoom)}
                    />
                );
            } else return null;
        })}
    </div>
);
// ------------------------------------------------------------
// export withRedux - mapState only
// ------------------------------------------------------------
export default withRedux(UserGrid, true, true);
