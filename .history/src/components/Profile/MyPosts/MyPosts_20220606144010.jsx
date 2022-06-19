import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
   let postData = [
      { id: 1, message: 'Hi,how are u?', likescount: 15 },
      { id: 2, message: 'its my first post ', likescount: 11 },
   ]
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