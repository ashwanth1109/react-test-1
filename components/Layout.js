import Head from "next/head";
import { connect } from "react-redux";

const mapStateFromProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    // dispatch actions
});

const withLayout = (BaseComponent, pageTitle) => {
    class App extends React.Component {
        render = ({ props } = this) => (
            <React.Fragment>
                <Head>
                    <title>{pageTitle || "Realtime Chat"}</title>
                </Head>
                <BaseComponent {...props} />
            </React.Fragment>
        );
    }

    return connect(
        mapStateFromProps,
        mapDispatchToProps
    )(App);
};

export default withLayout;
