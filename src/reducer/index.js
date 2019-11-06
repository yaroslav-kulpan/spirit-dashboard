import updateMessagesTable from "./messages";

const reducers = (state, action) => {
    return {
        messagesTable: updateMessagesTable(state, action),
    }
};

export default reducers;
