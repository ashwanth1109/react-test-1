import withLayout from "../components/Layout";
import { fCenter, fScreen, title, grid } from "../styles";

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
        width: "100px",
        height: "100px",
        margin: "0 auto",
        cursor: "pointer"
    }
};

class Index extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div style={s.container}>
                <div style={s.info}>Choose your identity</div>
                <div style={s.icons}>
                    <img
                        src="/static/aquaman.png"
                        style={s.icon}
                        alt="aquaman"
                    />
                    <img src="/static/batman.png" style={s.icon} alt="batman" />
                    <img src="/static/flash.png" style={s.icon} alt="flash" />
                    <img
                        src="/static/glantern.png"
                        style={s.icon}
                        alt="green lantern"
                    />
                    <img
                        src="/static/mmanhunter.png"
                        style={s.icon}
                        alt="martian manhunter"
                    />
                    <img
                        src="/static/superman.png"
                        style={s.icon}
                        alt="superman"
                    />
                    <img
                        src="/static/wwoman.png"
                        style={s.icon}
                        alt="wonder woman"
                    />
                </div>
            </div>
        );
    }
}

export default withLayout(Index, "The League Channel");
