const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newDialogMessage,
            }
            state.messages.push(newMessage)
            state.newDialogMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newDialogMessage = action.newText
            return state;
        default:
            return state;
    }
}
export const sendMessageActionCreator = () => ({
    type : SEND_MESSAGE
})
export const updateNewMessageTextActionCreator = (body) =>
    ({ type:UPDATE_NEW_MESSAGE_TEXT , newText: body })
export default messageReducer;