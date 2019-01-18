import React from "react";

import { connect } from "react-redux";
import Message from "./Message";
import { col } from "../styles";

import { AutoSizer, List } from "react-virtualized";

const mapStateFromProps = state => {
    return {
        messages: state.messages
    };
};

const s = {
    container: {
        flex: "1",
        backgroundColor: "#666",
        ...col,
        padding: "20px 0"
    }
};

class ChatMessages extends React.Component {
    rowRenderer = ({ key, index, style }, { messages } = this.props) => {
        return (
            <div key={key} style={style}>
                <Message message={messages[index]} />
            </div>
        );
    };

    render({ messages } = this.props) {
        return (
            <div style={s.container}>
                <AutoSizer>
                    {({ height, width }) => (
                        <List
                            ref="List"
                            width={width}
                            height={height}
                            rowCount={messages.length}
                            rowHeight={143}
                            rowRenderer={this.rowRenderer}
                            scrollToRow={messages.length}
                        />
                    )}
                </AutoSizer>
            </div>
        );
    }
}

export default connect(mapStateFromProps)(ChatMessages);
