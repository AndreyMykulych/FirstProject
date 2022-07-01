import React from 'react';
import { updateNewPostTextActionCreator , addPostActionCreator } from '../../../redux/Profile-reducer';
import storeContext from '../../../StoreContext';
import MyPosts from './MyPosts';
const MyPostsContainer = (props) => {
    

   
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
            
    
    
}
export default MyPostsContainer