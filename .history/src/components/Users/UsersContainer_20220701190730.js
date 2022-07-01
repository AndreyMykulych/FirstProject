import React from "react";
import { followAC, setUsersAC } from "../../redux/Users-reducer";
import { unfollowAC } from "../../redux/Users-reducer";
import { setCurrentPageAC } from "../../redux/Users-reducer";
import { connect } from "react-redux";
/* import Users from "./Users"; */
import UsersC from "./UsersC";
const stateToProps = (state) => {
    return {
        users: state.usersPage.users,
        PageSize: state.usersPage.pageSize,
        TotalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        }
    }
    
}
const UsersContainer = connect(stateToProps,dispatchToProps)(UsersC)
export default UsersContainer;