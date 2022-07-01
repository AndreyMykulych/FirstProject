import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.usersPhoto}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU" />
            </div>
                <div>

                </div>
            </span>
            <span></span>
            
        </div>)}
    </div>

    
}
    
    
    
    
    
export default Users;