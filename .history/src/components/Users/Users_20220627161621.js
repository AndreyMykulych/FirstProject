import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div className={s.usersPhoto}>
                    <img src={u.photoUrl} />
            </div>
                <div>
                <button >follow</button>
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.sity}</div>
                </span>
            </span>
            
        </div>)}
    </div>

    
}
    
    
    
    
    
export default Users;