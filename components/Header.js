import React from "react";
import { fCenter, title } from "../styles";

const s = {
    container: {
        width: "100%",
        height: "50px",
        ...fCenter,
        ...title
    }
};

const Header = ({ children }) => <div style={s.container}>{children}</div>;

export default React.memo(Header);
