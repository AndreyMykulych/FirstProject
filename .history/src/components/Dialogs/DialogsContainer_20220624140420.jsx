import React from "react";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/Message-reducer";
import storeContext from "../../StoreContext";
import { connect } from "react-redux";
/* const DialogsContainer = (props) => {
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
               /*  dialogs={state.dialogs}
                messages={state.messages} */
          /*      messagesPage={state.messagesPage}
            />
        }
    }     
</storeContext.Consumer>
}   */
let stateToProps= (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
let dispatchToProps= (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onChangeMessage: () => {
            dispatch(updateNewMessageTextActionCreator())
        }
}
}

const DialogsContainer = connect(stateToProps,dispatchToProps)(Dialogs)
export default DialogsContainer;