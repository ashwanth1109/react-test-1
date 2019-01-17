import React from "react";

const s = {
    container: {
        flex: 2
    }
};

const UserList = () => <div style={s.container}>UserList</div>;

export default React.memo(UserList);
