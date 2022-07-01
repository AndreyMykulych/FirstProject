import React from "react";
import { useEffect } from "react";
import s from "./Users.module.css"
import * as axios from "axios"
import anonPhoto from "../../else/photo/Account-User-PNG-Transparent.png"

class UsersC extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => { this.props.setUsers(response.data.items) })
    }
    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => { this.props.setUsers(response.data.items) })
    }
    render() {

        let pageCount = Math.ceil(this.props.TotalUserCount / this.props.PageSize)
       let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        debugger;
        return (<div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p ? s.selectedPage : ''}
                        onClick={()=>this.onChangePage()}>{p}</span>
                })}
            </div>
          
            {this.props.users.map(u => <div key={u.id}>
                <h1 className={s.textPrimary}>Users</h1>
                <span>
                    <div className={s.usersPhoto}>
                        <img src={u.photos.small != null ? u.photos.small : anonPhoto} />
                </div>
                    <div> {u.followed
                        ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                        : <button onClick={() => { this.props.follow(u.id) }} >followed</button>}
                  
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
}
    
    
export default UsersC;