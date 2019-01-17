import Head from "next/head";
import { connect } from "react-redux";
import { updateState } from "../actions";
import NProgress from "nprogress";
import Router from "next/router";

const mapStateFromProps = state => {
    console.log(state);
    return state;
};

const mapDispatchToProps = dispatch => {
    return {
        updateState: (payload, type) => {
            updateState(dispatch, payload, type);
        }
    };
};

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.error();

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
