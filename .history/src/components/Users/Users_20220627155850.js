import React from "react";

const Users = (props) => {
    return <div>
        {props.users.map(u => <div key={u.id}> </div>)}
    </div>

    
}
    
    
    
    
    
export default Users;