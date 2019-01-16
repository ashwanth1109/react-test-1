import withLayout from "../components/Layout";

class Index extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div>Hello Pusher</div>
            </div>
        );
    }
}

export default withLayout(Index, "The League Channel");
