import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
   return (


      <div className={s.item}>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6YmKu9T0f5cAXCmgHEZ7B8CfAU03rKwwj1OrAeKNPRvzvlyPJzgS-TY5oXFZtqDWfcUI&usqp=CAU' />
         { props.message }
         <div>
            <span>{props.likescount}</span>
         </div>
      </div>
   )

}

export default Post;