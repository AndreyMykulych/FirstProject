const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE"

let initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 10,
    currentPage: 2,
    
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
    
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage : action.currentPage
                
            }
        default:
            return state;
         
    }
}
export const followAC = (userId) => ({
    type: FOLLOW_USER,
    userId })
export const unfollowAC = (userId) => 
({type: UNFOLLOW_USER,userId})
export const setUsersAC = (users) => ({
    type: SET_USERS, users
})
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})


export default usersReducer;
  