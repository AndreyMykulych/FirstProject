import React from "react";
import { followAC, setUsersAC } from "../../redux/Users-reducer";
import { unfollowAC } from "../../redux/Users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
const stateToProps = (state) => {
    return {
        users: state.usersPage.users
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
const UsersContainer = connect(stateToProps,dispatchToProps)(Users)
export default UsersContainer;