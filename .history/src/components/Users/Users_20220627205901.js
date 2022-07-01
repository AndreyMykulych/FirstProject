import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    /* const followUser = () => {
        props.followUser()
    }
    const unFollowUser = () => {
        props.unFollowUser(u.id)
    } */
    return <div>
        {props.users.map(u => <div key={u.id}>
            <h2>Users</h2>
            <span>
                <div className={s.usersPhoto}>
                    <img src={u.photoUrl} />
            </div>
                <div>
                    {u.followed ? <button onClick={() => { props.followUser(u.id) }}>followed</button> :
                        <button onClick={() => { props.unFollowUser(u.id) }} >unfollowed</button>}
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