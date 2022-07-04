import React from "react";
import s from "./Users.module.css"
import anonPhoto from "../../else/photo/Account-User-PNG-Transparent.png"
import { NavLink } from "react-router-dom";
const Users = (props) => { 
    let pageCount = Math.ceil(props.TotalUserCount / props.PageSize)
    let pages = []
     for (let i = 1; i <= 20; i++) {
         pages.push(i)
     }
    
    return (
    <div>
    <div>
        {pages.map(p => {
            return <span className={props.currentPage === p ? s.selectedPage : ''}
                onClick={() => { props.onChangePage(p) }}>   {p}</span>
        })}
    </div>
  
    {props.users.map(u => <div key={u.id}>
        <h1 className={s.textPrimary}>Users</h1>
        <span>
            <div className={s.usersPhoto}>
                <NavLink to={"/profile/" +u.id }>
                    <img src={u.photos.small != null ? u.photos.small : anonPhoto} />
                    </NavLink>
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
</div>)
}


export default Users