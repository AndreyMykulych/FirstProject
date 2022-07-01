import React from "react";
import s from "./Users.module.css"
const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",
            followed: true, fullName: "Andrey", status: "I'm boss", location: { country: "Ukraine", city: "Kiev" }
        },
        {
            id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",
            followed: false, fullName: "Olya", status: "I'm sweety", location: { country: "Ukraine", city: "Kiev" }
        },
        {
            id: 3, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",
            followed: true, fullName: "Bodya", status: "I'm ganjaman", location: { country: "Ukraine", city: "Kiev" }
        },
        {
            id: 4, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",
            followed: false, fullName: "Dimych", status: "I'm boss of boss", location: { country: "Ukraine", city: "Kiev" }
        }])
    }
    return <div>
        {props.users.map(u => <div key={u.id}>
            <h2>Users</h2>
            <span>
                <div className={s.usersPhoto}>
                    <img src={u.photoUrl} />
            </div>
                <div> {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }} >followed</button>}
              
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