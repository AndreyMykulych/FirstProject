import React from 'react';
import { updateNewPostTextActionCreator , addPostActionCreator } from '../../../redux/Profile-reducer';
import store from '../../../redux/reduxStore';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {
    let state = props.store.getState();
 
    const onAddPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }

    let onChangePost = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
        
    }
   
    debugger;

   
    return (
        <MyPosts updateNewPostText={onChangePost}
            addPost={onAddPost}
            posts={state.posts}
            newPostText={props.store.state.profilePage.newPostText}/>
   )
    
}
export default MyPostsContainer