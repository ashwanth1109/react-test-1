export const mapStateFromProps = state => state;

export const mapDispatchToProps = dispatch => ({
    // send message to room [ChatInput]
    addMessageToRoom: async (message, currentUser, roomId) => {
        try {
            await currentUser.sendMessage({
                text: message,
                roomId: roomId
            });
        } catch (err) {
            console.error(err);
        }
    }
});
