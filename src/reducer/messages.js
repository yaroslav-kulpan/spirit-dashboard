import {
    FETCH_MESSAGES_REQUEST,
    FETCH_MESSAGES_SUCCESS,
    FETCH_MESSAGES_FAILURE,
    FETCH_MESSAGES_DELETE
} from "../actions/ActionsName";

const updateMessagesTable = (state, action) => {
    if (state === undefined) {
        return {
            messages: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case FETCH_MESSAGES_REQUEST:
            return {
                messages: action.payload,
                loading: false,
                error: null,
            };
        case FETCH_MESSAGES_SUCCESS:
            return {
                messages: [],
                loading: true,
                error: null,
            };
        case FETCH_MESSAGES_FAILURE:
            return {
                messages: [],
                loading: false,
                error: action.payload,
            };
        case FETCH_MESSAGES_DELETE:
            return {
                messages: [],
                loading: false,
                error: null,
            };
        default:
            return state.messagesTable;
    }
};

export default updateMessagesTable;