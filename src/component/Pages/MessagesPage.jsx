import React from "react";
import Messages from "../Messages";

const MessagesPage = () => {
    return (
        <>
            <div className="d-flex align-items-center justify-content-between py-2 px-3">
                <h3>Messages</h3>
            </div>
            <div className="bg-light px-3 py-3">
                <Messages/>
            </div>
        </>
    );
};

export default MessagesPage;