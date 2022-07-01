const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    if (action.type === SEND_MESSAGE ) {
        let newMessage = {
            id: 6,
            message: state.newDialogMessage,
        }
        state.messages.push(newMessage)
        state.newDialogMessage = '';
        
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT ) {
        state.newDialogMessage = action.newText
      
    }

    return state;
}
export default messageReducer;