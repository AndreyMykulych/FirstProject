import React from 'react';
import state from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    debugger;
    return     <div className={s.content}>
            <ProfileInfo />
        <MyPosts
            posts={props.Profile.posts}
            addPost={props.addPost}
            currentValue={props.Profile.newPostText}
            updateNewPostText ={props.updateNewPostText } />
        </div>
}
export default Profile;