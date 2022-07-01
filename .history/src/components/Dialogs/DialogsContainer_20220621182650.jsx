import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/Message-reducer";
const DialogsContainer = (props) => {
    let onSendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action)
    }
    let onChangeMessage = (body) => {
        let action = updateNewMessageTextActionCreator(body)
        props.store.dispatch(action)
    }

    return (
    <Dialogs onSendMessage={onSendMessage} onChangeMessage={onChangeMessage} />
)
}

export default DialogsContainer;