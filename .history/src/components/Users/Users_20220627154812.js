import React from "react";
import User from "./User/User";
import s from "./Users.module.css"
const Users = (props) => {
    return <div><h2>Users</h2>
        <div>
            <span>
                <div className={s.usersPhoto}> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU" /></div>
                <div><button>Follow</button></div>
            </span>
            <span></span>
            users will be here
                
    </div></div>
}
export default Users;