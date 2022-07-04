import React from "react";
import { followAC, setUsersAC } from "../../redux/Users-reducer";
import { unfollowAC } from "../../redux/Users-reducer";
import { setCurrentPageAC } from "../../redux/Users-reducer";
import { connect } from "react-redux";
import { setTotalUsersCountAC    } from "../../redux/Users-reducer";
import * as axios from "axios"
import Users from "./Users";

import { isLoadingAC } from "../../redux/Users-reducer";
import Loading from "../preLoader";
class UsersContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onChangePage = (pageNumber) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {

       
        return <>
            <Loading isLoading={ this.props.isLoading}/>
            <Users
            TotalUserCount={this.props.TotalUserCount}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users} />
           
        </>
    }
}
const stateToProps = (state) => {
    return {
        users: state.usersPage.users,
        PageSize: state.usersPage.pageSize,
        TotalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading : state.usersPage.isLoading
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
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        setIsLoading: (load) => {
            dispatch(isLoadingAC(load))
        }
    }
    
}
export default connect(stateToProps,dispatchToProps)(UsersContainer)
