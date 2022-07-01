import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    
    return     <div className={s.content}>
            <ProfileInfo />
        <MyPostsContainer
            store={props.store}
            posts={props.Profile.posts}
           dispatch={props.dispatch}
            newPostText={props.Profile.newPostText}
            />
        </div>
}
export default Profile;