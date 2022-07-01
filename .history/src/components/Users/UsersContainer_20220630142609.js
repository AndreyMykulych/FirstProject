import React from "react";
import { followAC, setUsersAC } from "../../redux/Users-reducer";
import { unfollowAC } from "../../redux/Users-reducer";
import { connect } from "react-redux";
/* import Users from "./Users"; */
import UsersC from "./UsersC";
const stateToProps = (state) => {
    return {
        users: state.usersPage.users,
        PageSize: state.PageSize,
        TotalUserCount : state.TotalUserCount
    }
}
const dispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
          dispatch(unfollowAC(userId))  
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
    
}
const UsersContainer = connect(stateToProps,dispatchToProps)(UsersC)
export default UsersContainer;