// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withLayout from "../components/Layout"; // Layout Higher Order Component
import { users as userIcons } from "../store"; // user data array
import { index as s } from "../componentStyles"; // component styles
import { navigateToChat } from "../utilityFunctions"; // utility functions

// ------------------------------------------------------------
// Index Page Component
// ------------------------------------------------------------
const Index = ({ user, updateState }) => (
    <div style={s.container}>
        {/* Info Text: Choose your identity */}
        <div style={s.info}>Choose your identity</div>
        {/* Display Icons for all users - You can pick one */}
        <div style={s.icons}>
            {userIcons.map((userIcon, id) => (
                <img
                    key={id}
                    src={`/static/${userIcon}.png`}
                    style={{
                        ...s.icon,
                        ...(user === id ? s.selected : s.unselected)
                    }}
                    alt={userIcon}
                    onClick={() => updateState(id, "UPDATE_USER")}
                />
            ))}
        </div>
        {/* If user, clicking this button will navigate to chat page */}
        <div
            style={s.button}
            className="btn"
            onClick={() => navigateToChat(user)}
        >
            Log into the Channel
        </div>
    </div>
);

// ------------------------------------------------------------
// export with Layout HOC and parameter for page title
// ------------------------------------------------------------
export default withLayout(Index, "Time for Justice");
