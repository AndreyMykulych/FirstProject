
import Dialogs from "./Dialogs";
import { sendMessageActionCreator , updateNewMessageTextActionCreator } from "../../redux/Message-reducer";

import { connect } from "react-redux";
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
        onChangeMessage: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        }
}
}

const DialogsContainer = connect(stateToProps,dispatchToProps)(Dialogs)
export default DialogsContainer;