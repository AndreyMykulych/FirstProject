import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    const followUser = () => {
        props.followUser()
    }
    const unFollowUser = () => {
        props.unFollowUser()
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={s.usersPhoto}>
                    <img src={u.photoUrl} />
            </div>
                <div>
                    {u.followed ? <button onClick={followUser}>followed</button> :
                                  <button onClick={unFollowUser}>unfollowed</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
            
        </div>)}
    </div>

    
}
    
    
    
    
    
export default Users;