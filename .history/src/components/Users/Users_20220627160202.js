import React from "react";

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