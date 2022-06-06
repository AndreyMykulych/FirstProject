import React from "react";
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return (
        <div>
            <div>

                <img className={s.mainPhoto}
                    src='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80' />
            </div>
            <div className={s.descriptionBlock}>ava+description</div>
        </div>
    )
}

export default ProfileInfo