// ------------------------------------------------------------
// import dependencies
// ------------------------------------------------------------
import withRedux from "./Redux"; // withRedux HOC
import { chatMessages as s } from "../componentStyles"; // component styles
import { AutoSizer, List } from "react-virtualized"; // React Virtualized List
import { renderChatMessages } from "../utilityFunctions";
// ------------------------------------------------------------
// Chat Messages Component
// ------------------------------------------------------------
const ChatMessages = ({ messages }) => (
    <div style={s.container}>
        {/* Auto Sizer occupies full size available to render virtualized list */}
        <AutoSizer>
            {/* react virtualized list */}
            {({ height, width }) => (
                <List
                    width={width}
                    height={height}
                    rowCount={messages.length}
                    rowHeight={143}
                    rowRenderer={rowRendererProps =>
                        renderChatMessages(rowRendererProps, messages)
                    }
                    scrollToIndex={messages.length - 1}
                    style={{ outline: "none" }}
                />
            )}
        </AutoSizer>
    </div>
);
// ------------------------------------------------------------
// export with redux HOC - only mapState required
// ------------------------------------------------------------
export default withRedux(ChatMessages, true, false);
