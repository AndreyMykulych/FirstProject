const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const messageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            }
            state.posts.push(newPost)
            state.profilePage.newPostText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT: state.newPostText = action.newText
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