import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
const Profile = (props) => {
    let postData = [
    { id: 1, message: 'Hi,how are u?', likescount: 15 },
    { id: 2, message: 'its my first post ', likescount: 11 },
 ]
   return <div className={s.content}>
      <ProfileInfo />
       <MyPosts postData={postData}/>
   </div>
}
export default Profile;