import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import { postData } from '../../..';
const MyPosts = () => {
   
   let postsElements = postData.map (p => <Post message={p.message} likescount={p.likescount} />)
   return (
      <div className={s.postBlock}> <h3>My posts </h3>  <div>

         <div className={s.textBlock}>
            <textarea ></textarea>
         </div>
         <div className={s.addPostButton}>
            <button>Add post</button>
         </div>
      </div>
         <div className={s.posts}>
            {postsElements}
         </div>
      </div>
   )

}
export default MyPosts;