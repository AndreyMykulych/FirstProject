import React from "react";
import s from './ProfileInfo.module.css'
import anonPhoto from "../../../else/photo/Account-User-PNG-Transparent.png"
import photoJob from "../../../else/photo/job.jpeg"
import PhotoNoJob from "../../../else/photo/nojob.jpeg"
import Loading from "../../preLoader";
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Loading/>
    }
    return (
        <div>
            <div>

                <img className={s.mainPhoto}
                    src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' />
            </div>
            <div className={s.descriptionBlock}>
                <span> <img src={props.profile.photos.large !== null ? props.profile.photos.large : anonPhoto} /></span> 
                <span className={s.fullName}> {props.profile.fullName}</span>
                <div>
                    <span className={s.aboutMe}>
                        {props.profile.aboutMe}
                    </span>
                    <div className={s.job}>
                       <img src= {props.profile.lookingForAJob===true ? photoJob :PhotoNoJob}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo