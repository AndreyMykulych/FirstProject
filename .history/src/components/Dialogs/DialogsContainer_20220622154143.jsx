import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/Message-reducer";
import storeContext from "../../StoreContext";
const DialogsContainer = (props) => {
    return <storeContext.Consumer>
        { (store) => {
            let state = store.getState().messagesPage
    
            let onSendMessage = () => {
                let action = sendMessageActionCreator();
                store.dispatch(action)
            }
            let onChangeMessage = (body) => {
                let action = updateNewMessageTextActionCreator(body)
                store.dispatch(action)
            }
    
            return <Dialogs onSendMessage={onSendMessage}
                onChangeMessage={onChangeMessage}
                dialogs={state.dialogs}
                messages={state.messages}
                newDialogMessage={state.newDialogMessage}
            />
        }
    }     
</storeContext.Consumer>
}

export default DialogsContainer;