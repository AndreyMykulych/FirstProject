import React from "react";
import s from "./Users.module.css"
const userPagination = (props) => {
    let pageCount = Math.ceil(props.TotalUserCount / props.PageSize)
    let pages = []
     for (let i = 1; i <= pageCount; i++) {
         pages.push(i)
     }
    return(
    <div>
                {pages.map(p => { return <span className={props.currentPage === p ? s.selectedPage : ''}>{p}</span> } )}
            </div> )
        
}
    
export default userPagination;
