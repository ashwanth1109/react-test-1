import React from "react";

const s = {
    container: {
        flex: 2,
        margin: "20px auto",
        width: "90%"
    }
};

const UserList = () => <div style={s.container}>UserList</div>;

export default React.memo(UserList);
