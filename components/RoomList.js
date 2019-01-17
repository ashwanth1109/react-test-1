import React from "react";
import { col } from "../styles";
import Header from "./Header";

import { connect } from "react-redux";
import RoomItem from "./RoomItem";

import { AutoSizer, List } from "react-virtualized";

const mapStateFromProps = state => {
    return {
        rooms: state.rooms
    };
};

const s = {
    container: {
        flex: 3,
        ...col
    }
};

class RoomList extends React.Component {
    rowRenderer = ({ key, index, style }, { rooms } = this.props) => {
        return (
            <div key={key} style={style}>
                <RoomItem room={rooms[index]} id={index} />
            </div>
        );
    };

    render({ rooms } = this.props) {
        return (
            <div style={s.container}>
                <Header>YOUR ROOMS</Header>
                <div style={{ flex: 1 }}>
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                width={width}
                                height={height}
                                rowCount={rooms.length}
                                rowHeight={150}
                                rowRenderer={this.rowRenderer}
                                style={{ outline: "none" }} // Important to enable if accessibility is required
                            />
                        )}
                    </AutoSizer>
                </div>
                <div
                    style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#fff"
                    }}
                />
            </div>
        );
    }
}

export default connect(mapStateFromProps)(RoomList);
