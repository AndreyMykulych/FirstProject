import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import store from '../../../redux/reduxStore';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likescount={p.likescount} />)
    let newPostElement = React.createRef();
   
   const onAddPost = () => {
      props.addPost()
    }
  
    let onChangePost = () => {
        let text = newPostElement.current.value;
      props.updateNewPostText(text)
    }
    debugger;
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