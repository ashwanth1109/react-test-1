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
    button,
    center
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

// message component
export const message = {
    container: {
        width: "100%",
        padding: "50px 10px 0 40px",
        boxSizing: "border-box",
        ...col
    },
    message: {
        width: "100%",
        backgroundColor: "#222",
        borderRadius: "10px",
        position: "relative"
    },
    image: {
        position: "absolute",
        width: "80px",
        height: "80px",
        borderRadius: "40px",
        top: "-40px",
        left: "-20px",
        border: "2px solid #fff"
    },
    messageBody: {
        padding: "10px 10px 20px 70px",
        fontSize: "20px"
    },
    messageSender: {
        width: "100%",
        height: "40px",
        ...smallText,
        padding: "0 0 0 70px"
    }
};

// modal component
export const modal = {
    container: {
        position: "absolute",
        ...fScreen,
        backgroundColor: "#22222280",
        ...fCenter
    },
    modalForm: {
        width: "500px",
        backgroundColor: "#222",
        borderRadius: "10px",
        ...col,
        alignItems: "center",
        padding: "20px"
    },
    modalTitle: {
        ...smallText
    },
    modalRow: {
        ...row,
        margin: "20px 0"
    },
    modalLabel: {
        ...smallText,
        marginRight: "20px"
    },
    modalInput: {
        width: "200px",
        outline: "none",
        padding: "3px 10px",
        fontSize: "16px"
    },
    memberGrid: {
        marginTop: "10px",
        width: "60%",
        display: "grid",
        gridRowGap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))"
    },
    icon: {
        width: "60px",
        height: "60px",
        margin: "0 auto",
        cursor: "pointer",
        borderRadius: "30px"
    },
    selected: {
        border: "2px solid #fff"
    },
    unselected: {
        border: "2px solid #ffffff00"
    },
    buttonContainer: {
        ...row,
        width: "100%",
        justifyContent: "center"
    },
    button: {
        ...button,
        margin: "20px 10px"
    }
};

// room item component
export const roomItem = {
    container: {
        width: "90%",
        margin: "10px auto",
        height: "80px",
        ...col,
        ...center,
        border: "2px solid #fff",
        borderRadius: "10px",
        cursor: "pointer",
        position: "relative"
    },
    selected: {
        ...bg.white,
        color: "#222"
    },
    roomName: {
        fontSize: "24px",
        marginBottom: "10px"
    },
    delete: {
        position: "absolute",
        width: "30px",
        height: "30px",
        top: "0px",
        right: "0px"
    }
};
