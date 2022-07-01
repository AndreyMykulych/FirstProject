import React from 'react';
import { updateNewPostTextActionCreator , addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {
    let state = props.store.getState();
    debugger;
    const onAddPost = () => {
        let action = addPostActionCreator()
        props.store.dispatch(action)
    }
  
    let onChangePost = (text) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
        
    }
   
   
   
    return (
        <MyPosts updateNewPostText={onChangePost}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.newPostText}/>
   )
    
}
export default MyPostsContainer