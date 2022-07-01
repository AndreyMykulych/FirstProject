
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator , addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';
let stateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}
let dispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangePost: (text) => {
            dispatch( updateNewPostTextActionCreator(text)) 
        }
    }
}
const MyPostsContainer = connect(stateToProps,dispatchToProps)(MyPosts)
export default MyPostsContainer