import React from "react";
import { followAC, setUsersAC } from "../../redux/Users-reducer";
import { unfollowAC } from "../../redux/Users-reducer";
import { connect } from "react-redux";
import Users from "./Users";
const stateToProps = (state) => {
    return {
        users: state.users
    }
}
const dispatchToProps = (dispatch) => {
    return {
        followUser: () => {
            dispatch(followAC())
        },
        unfollowUser: () => {
          dispatch(unfollowAC())  
        },
        setUsers: () => {
            dispatch(setUsersAC())
        }
    }
    
}
const UsersContainer = connect(stateToProps,dispatchToProps)(Users)
export default UsersContainer;