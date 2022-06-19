import React from 'react';
import state from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    
    return     <div className={s.content}>
            <ProfileInfo />
        <MyPosts
            posts={props.Profile.posts}
           dispatch={props.dispatch}
            newPostText={props.Profile.newPostText}
            />
        </div>
}
export default Profile;