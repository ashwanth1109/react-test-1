// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import { button as s } from "../componentStyles";
// ------------------------------------------------------------
// Button Component
// ------------------------------------------------------------
const Button = ({ children, onClick }) => {
    return (
        <div style={s.container} className="btn" onClick={onClick}>
            {children}
        </div>
    );
};
// ------------------------------------------------------------
// export Button
// ------------------------------------------------------------
export default React.memo(Button);
