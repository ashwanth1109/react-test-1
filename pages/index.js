import withLayout from "../components/Layout";
import { fCenter, fScreen, title, grid, smallText } from "../styles";
import Router from "next/router";
import { users as userIcons } from "../store";

const s = {
    container: {
        ...fScreen,
        ...fCenter,
        flexDirection: "column"
    },
    info: {
        ...title
    },
    icons: {
        width: "60%",
        margin: "50px 0",
        ...grid
    },
    icon: {
        width: "120px",
        height: "120px",
        margin: "0 auto",
        cursor: "pointer",
        borderRadius: "60px"
    },
    selected: {
        border: "3px solid #ffffff"
    },
    unselected: {
        border: "3px solid #ffffff00"
    },
    button: {
        padding: "10px 30px",
        ...fCenter,
        ...smallText,
        border: "3px solid #fff",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.2s ease-in-out"
    }
};

class Index extends React.Component {
    navigateToChat = ({ user } = this.props) =>
        user !== null ? Router.push("/chat") : null;

    render({ user, updateState } = this.props) {
        console.log(this.props);
        return (
            <div style={s.container}>
                <div style={s.info}>Choose your identity</div>
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
                <div
                    style={s.button}
                    className="btn"
                    onClick={() => this.navigateToChat()}
                >
                    Log into the Channel
                </div>
            </div>
        );
    }
}

export default withLayout(Index, "Time for Justice");
