import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img className={s.usersPhoto}
                        src="" />
            </div>
                <div>

                </div>
            </span>
            <span></span>
            
        </div>)}
    </div>

    
}
    
    
    
    
    
export default Users;