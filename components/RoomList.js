// ------------------------------------------------------------
// imoprt dependencies
// ------------------------------------------------------------
import { roomList as s } from "../componentStyles";
import { AutoSizer, List } from "react-virtualized";
import withRedux from "./Redux";
import { renderRoomList } from "../utilityFunctions";
// ------------------------------------------------------------
// import components
// ------------------------------------------------------------
import Header from "./Header";
// ------------------------------------------------------------
// Room List Component
// ------------------------------------------------------------
class RoomList extends React.Component {
    render({ rooms } = this.props) {
        return (
            <div style={s.container}>
                <div style={s.roomList}>
                    <AutoSizer>
                        {({ height, width }) => (
                            <List
                                width={width}
                                height={height}
                                rowCount={rooms.length}
                                rowHeight={90}
                                rowRenderer={rowRendererProps =>
                                    renderRoomList(rowRendererProps, rooms)
                                }
                                style={{
                                    outline: "none"
                                }} // Important to enable if accessibility is required
                            />
                        )}
                    </AutoSizer>
                </div>
            </div>
        );
    }
}
// ------------------------------------------------------------
// export withRedux - only mapState
// ------------------------------------------------------------
export default withRedux(RoomList, true, false);
