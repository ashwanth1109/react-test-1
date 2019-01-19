// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { connect } from "react-redux";
import { mapStateFromProps, mapDispatchToProps } from "../reduxMapFunctions";
// ------------------------------------------------------------
// withRedux Higher Order Component
// ------------------------------------------------------------
const withRedux = (BaseComponent, withMapState, withMapDispatch) => {
    // ------------------------------------------------------------
    // create App Component
    // ------------------------------------------------------------
    const App = props => <BaseComponent {...props} />;
    // ------------------------------------------------------------
    // Check if passed in Component needs access to both mapState and mapDispatch
    // or only one of them
    // ------------------------------------------------------------
    if (withMapState && withMapDispatch) {
        return connect(
            mapStateFromProps,
            mapDispatchToProps
        )(App);
    } else if (withMapState && !withMapDispatch) {
        return connect(
            mapStateFromProps,
            null
        )(App);
    } else if (!withMapState && withMapDispatch) {
        return connect(
            null,
            mapDispatchToProps
        )(App);
    } else {
        console.error("withRedux HOC is missing parameters");
        return App;
    }
};
// ------------------------------------------------------------
// export HOC function
// ------------------------------------------------------------
export default withRedux;
