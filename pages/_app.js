import App, { Container } from "next/app";
import { createStore } from "redux";
import reducers from "../store";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

const makeStore = initialState => createStore(reducers, initialState);

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            try {
                pageProps = await Component.getInitialProps(ctx);
            } catch (err) {
                console.error(err);
            }
        }
        return { pageProps };
    }

    render = ({ Component, pageProps, store } = this.props) => (
        <Container>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </Container>
    );
}

export default withRedux(makeStore)(MyApp);
