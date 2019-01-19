export const fCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

export const center = {
    justifyContent: "center",
    alignItems: "center"
};

export const fScreen = {
    width: "100vw",
    height: "100vh"
};

export const title = {
    fontFamily: "Coiny, cursive",
    fontSize: "30px"
};

export const smallText = {
    fontFamily: "Coiny, cursive",
    fontSize: "16px"
};

export const grid = {
    display: "grid",
    gridRowGap: "30px",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))"
};

export const row = {
    display: "flex",
    flexDirection: "row"
};

export const col = {
    display: "flex",
    flexDirection: "column"
};

export const bg = {
    white: {
        backgroundColor: "#fff"
    }
};

export const btn = {
    width: "100px",
    height: "35px",
    ...fCenter,
    border: "3px solid #fff",
    borderRadius: "10px",
    ...smallText,
    cursor: "pointer"
};
