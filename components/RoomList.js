import React from "react";
import { col, title, fCenter } from "../styles";
import Header from "./Header";

import { connect } from "react-redux";
import RoomItem from "./RoomItem";

import { AutoSizer, List } from "react-virtualized";
import { updateState } from "../store";

const mapStateFromProps = state => {
    return {
        rooms: state.rooms
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateModal: modal => {
            updateState(dispatch, modal, "MODAL");
        }
    };
};

const s = {
    container: {
        flex: 3,
        ...col
    },
    addRoom: {
        height: "60px",
        width: "90%",
        margin: "0 auto",
        backgroundColor: "#fff",
        ...title,
        color: "#222",
        ...fCenter,
        cursor: "pointer"
    }
};

class RoomList extends React.Component {
    rowRenderer = ({ key, index, style }, { rooms } = this.props) => {
        return (
            <div key={key} style={style}>
                <RoomItem roomItem={rooms[index]} id={index} />
            </div>
        );
    };

    render({ rooms, updateModal } = this.props) {
        console.log(rooms);
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
                                rowHeight={104}
                                rowRenderer={this.rowRenderer}
                                style={{ outline: "none" }} // Important to enable if accessibility is required
                            />
                        )}
                    </AutoSizer>
                </div>
                <div style={s.addRoom} onClick={() => updateModal(true)}>
                    Add Room +
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateFromProps,
    mapDispatchToProps
)(RoomList);
