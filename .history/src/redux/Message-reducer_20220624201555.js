const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState={
    dialogs: [
        { id: 1, name: "Dimych", img: 'https://dota2.ru/img/heroes/pudge/portrait.jpg' },
        { id: 2, name: "Andriy" , img :'https://dota2.ru/img/heroes/lina/portrait.jpg' }, 
        { id: 3, name: "Sveta" ,img :'https://dota2.ru/img/heroes/skywrath_mage/portrait.jpg'},
        { id: 4, name: "Sasha" },
        { id: 5, name: "Olya" },
        { id: 6, name: "Valera" },
    ],
    messages : [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
        { id: 6, message: "yo" },
    ],
     newDialogMessage : 'hi dude',
    }
const messageReducer = (state=initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newDialogMessage,
            }
            let stateCopy = { ...state }
            stateCopy.messages = [...state.messages]
            stateCopy.dialogs = [...state.dialogs]
            stateCopy.messages.push(newMessage)
            stateCopy.newDialogMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy={...state}
            stateCopy.newDialogMessage = action.newText
            return stateCopy;
        }
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