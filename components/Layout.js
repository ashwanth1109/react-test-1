// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import Head from "next/head"; // Overwrite Head from Next JS
import NProgress from "nprogress"; // Set nprogress loader on route change
import Router from "next/router"; // Router from Next JS
import withRedux from "./Redux"; // with Redux HOC
// ------------------------------------------------------------
// Configure route change methods to nprogress methods
// ------------------------------------------------------------
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.error();
// ------------------------------------------------------------
// withLayout Higher Order Component
// ------------------------------------------------------------
const withLayout = (BaseComponent, pageTitle) => {
    const App = props => (
        <React.Fragment>
            <Head>
                <title>{pageTitle || "Realtime Chat"}</title>
            </Head>
            <BaseComponent {...props} />
        </React.Fragment>
    );
    // ------------------------------------------------------------
    // return App component withRedux HOC
    // ------------------------------------------------------------
    return withRedux(App, true, true);
};
// ------------------------------------------------------------
// return withLayout HOC method
// ------------------------------------------------------------
export default withLayout;
