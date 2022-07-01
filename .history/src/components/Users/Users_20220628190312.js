import React from "react";
import s from "./Users.module.css"
import * as axios from "axios"
import anonPhoto from "../../else/photo/Account-User-PNG-Transparent.png"
const Users = (props) => {

   
    
    return <div>
        {props.users.map(u => <div key={u.id}>
            <h2>Users</h2>
            <span>
                <div className={s.usersPhoto}>
                    <img src={u.photos.small != null ? u.photos.small : anonPhoto} />
            </div>
                <div> {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }} >followed</button>}
              
                </div>
            </span> 
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country" }</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
            
        </div>)}
    </div>
    
    
}
    
    
    
    
    
export default Users;