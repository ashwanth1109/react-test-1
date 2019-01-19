// ------------------------------------------------------------
// import common styles
// ------------------------------------------------------------
import {
    fCenter,
    fScreen,
    title,
    grid,
    smallText,
    row,
    bg,
    col,
    button
} from "./styles";

// ------------------------------------------------------------
// page styling
// ------------------------------------------------------------
// index page
export const index = {
    container: {
        ...fScreen,
        ...fCenter,
        flexDirection: "column"
    },
    info: {
        ...title
    },
    icons: {
        width: "60%",
        margin: "50px 0",
        ...grid
    },
    icon: {
        width: "120px",
        height: "120px",
        margin: "0 auto",
        cursor: "pointer",
        borderRadius: "60px"
    },
    selected: {
        border: "3px solid #ffffff"
    },
    unselected: {
        border: "3px solid #ffffff00"
    },
    button: {
        padding: "10px 30px",
        ...fCenter,
        ...smallText,
        border: "3px solid #fff",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.2s ease-in-out"
    }
};

// chat page
export const chat = {
    container: {
        height: "100vh",
        ...row,
        margin: "0 auto"
    },
    userRoomList: {
        flex: 1,
        ...col,
        borderRight: "1px solid #fff"
    },
    chatMessages: {
        flex: 2.5,
        ...bg.white,
        ...col
    }
};

// ------------------------------------------------------------
// component styling
// ------------------------------------------------------------
// chat input component
export const chatInput = {
    container: {
        width: "100%",
        backgroundColor: "#222",
        ...row,
        padding: "30px 20px",
        boxSizing: "border-box",
        alignItems: "center"
    },
    input: {
        flex: "1",
        border: "2px solid #fff",
        borderRadius: "10px",
        marginRight: "20px",
        outline: "none",
        height: "30px",
        padding: "5px 10px",
        color: "#222",
        fontSize: "20px"
    },
    button: {
        ...button
    }
};

// chat messages component
export const chatMessages = {
    container: {
        flex: "1",
        backgroundColor: "#666",
        ...col,
        padding: "20px 0"
    }
};

// header component
export const header = {
    container: {
        width: "100%",
        height: "50px",
        ...fCenter,
        ...title
    }
};
