import { connect } from "react-redux";
import { mapStateFromProps, mapDispatchToProps } from "../reduxMapFunctions";

const withRedux = (BaseComponent, withMapState, withMapDispatch) => {
    const App = props => <BaseComponent {...props} />;

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

export default withRedux;
