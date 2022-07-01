import React from 'react';
import { updateNewPostTextActionCreator , addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {
    let state = props.store.getState().profilePage;
 
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
            newPostText={props.store.getState().profilePage.newPostText}/>
   )
    
}
export default MyPostsContainer