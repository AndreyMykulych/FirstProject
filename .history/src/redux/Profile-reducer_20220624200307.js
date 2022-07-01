const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Hi,how are u?', likescount: 15 },
        { id: 2, message: 'its my first post ', likescount: 11 },
        { id: 3, message: 'blalbalbla ', likescount: 13 },
        { id: 4, message: 'megogo ', likescount: 0 },
    ],
    newPostText: 'Hi'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likescount: 0
            };
            let stateCopy = { ...state }
            stateCopy.posts = {...state.posts}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = '';
            return stateCopy;
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state }
            stateCopy.newPostText = action.newText
            return stateCopy;
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text) => 
    ({ type : UPDATE_NEW_POST_TEXT , newText : text})
export default profileReducer;
  