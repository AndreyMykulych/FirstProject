const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = "SET-USERS";

let initialState = {
    users: [],
    pageSize: 3,
    totalUserCount: 0,
    currentPage: 1,
    
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
                ...state, users: [...state.users, ...action.users]
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
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;
  