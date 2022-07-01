import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/Message-reducer";

const DialogsContainer = (props) => {
    let state = props.store.getState().messagesPage
    
    let onSendMessage = () => {
        let action = sendMessageActionCreator();
        props.store.dispatch(action)
    }
    let onChangeMessage = (body) => {
        let action = updateNewMessageTextActionCreator(body)
        props.store.dispatch(action)
    }

    return (
        <Dialogs onSendMessage={onSendMessage}
            onChangeMessage={onChangeMessage}
            dialogs={state.dialogs}
            messages={state.messages}
            newDialogMessage={state.newDialogMessage}
        />
)
}

export default DialogsContainer;