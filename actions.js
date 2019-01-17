export const updateState = (dispatch, payload, type) =>
    dispatch({
        type: type,
        payload: payload
    });
