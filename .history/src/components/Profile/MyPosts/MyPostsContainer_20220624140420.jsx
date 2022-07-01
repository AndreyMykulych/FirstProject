import React from 'react';
import { connect } from 'react-redux';
import { updateNewPostTextActionCreator , addPostActionCreator } from '../../../redux/Profile-reducer';
import storeContext from '../../../StoreContext';
import MyPosts from './MyPosts';

/* const MyPostsContainer = (props) => {
    

   
    return  <storeContext.Consumer>
            { (store) => {
                let state = store.getState().profilePage;
 
                const onAddPost = () => {
                    let action = addPostActionCreator()
                    props.store.dispatch(action)
                }
        
                let onChangePost = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    props.store.dispatch(action)
                
                }
           return   <MyPosts updateNewPostText={onChangePost}
                    addPost={onAddPost}
                    posts={state.posts}
                    newPostText={state.newPostText} />
            }
            }
        </storeContext.Consumer>
            
    
    
} */
let stateToProps = (state) => {
    return {
        profilePage :state.profilePage
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