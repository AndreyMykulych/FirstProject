import React from "react";
import Profile from "./Profile"
import * as axios from 'axios'
import { connect } from "react-redux";
import { setUserProfileAC } from "../../redux/Profile-reducer";
import { useParams } from 'react-router-dom'; 
class ProfileContainer extends React.Component {
    constructor(props) {
        super(props)
    }
 
    componentDidMount() {
        const userId = this.props.param.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`  )
            .then(response => {
                
                this.props.setUserProfile(response.data)
               
        
            })
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}
const TakeParams = (props) => {
    return <ProfileContainer {...props} param={useParams()} />
}
let stateToProps = (state) => ({
    
     profile: state.profilePage.profile
    })
let dispatchToProps = (dispatch) => ({
    setUserProfile: (profile) => {
        dispatch(setUserProfileAC(profile))
    }
})

export default connect(stateToProps,dispatchToProps)(TakeParams)