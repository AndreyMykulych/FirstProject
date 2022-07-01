import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/Profile-reducer';
import MyPostsContainer from './MyPostsContainer';
const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likescount} />)
    let newPostElement = React.createRef();
   
   
   
    const onAddPost = () => {
      props.onAddPost()
    }
  
    let onChangePost = () => {
      props.updateNewPostText()
    }
   
   
   
    return (
      <div className={s.postBlock}> <h3>My posts </h3>  <div>

         <div className={s.textBlock}>
               <textarea
                   onChange={onChangePost}
                   ref={newPostElement}
                   value={props.newPostText}
                   />
         </div>
         <div className={s.addPostButton}>
               <button onClick={ onAddPost }>Add post</button>
         </div>
      </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )
    
}
export default MyPosts