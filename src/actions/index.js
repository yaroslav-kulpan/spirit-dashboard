import {
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_DELETE
} from "./ActionsName";

const messagesLoaded = (newMessages) => {
    return {
        type: FETCH_MESSAGES_REQUEST,
        payload: newMessages,
    }
};

const messagesRequested = () => {
    return {
        type: FETCH_MESSAGES_SUCCESS,
    }
};

const messagesError = (error) => {
    return {
        type: FETCH_MESSAGES_FAILURE,
        payload: error,
    }
};

const messageRemove = (messageId) => {
    return {
        type: FETCH_MESSAGES_DELETE,
        payload: messageId,
    }
};

const deleteMessages = (muayThaiSpiritService, dispatch) => {
    dispatch(messageRemove());
    muayThaiSpiritService.deleteMessagesById()
        .then((data) => dispatch(messagesLoaded(data)))
        .catch((err) => dispatch(messagesError(err)));
};

const fetchMessages = (muayThaiSpiritService, dispatch) => () => {
    dispatch(messagesRequested());
    muayThaiSpiritService.getAllMessages()
        .then((data) => dispatch(messagesLoaded(data)))
        .catch((err) => dispatch(messagesError(err)));
};

export {
    fetchMessages,
}