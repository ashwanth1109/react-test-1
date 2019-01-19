// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { modal as s } from "../componentStyles"; // component styles
import withRedux from "./Redux"; // withRedux HOC
// ------------------------------------------------------------
// Modal Component
// ------------------------------------------------------------
const Modal = ({ children, modal }) => {
    if (modal) {
        return (
            <div style={s.container}>
                <div style={s.modalForm}>{children}</div>
            </div>
        );
    } else return null;
};
// ------------------------------------------------------------
// export withRedux - mapState only
// ------------------------------------------------------------
export default withRedux(Modal, true, false);
