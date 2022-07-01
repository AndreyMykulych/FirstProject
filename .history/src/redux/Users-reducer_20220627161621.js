const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = "SET-USERS";

let initialState = {
    users: [
       { id: 1, photoUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",followed:true, fullName: "Andrey", status:"I'm boss",location:{country:"Ukraine", city:"Kiev"}},
        { id: 2, photoUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",followed:false, fullName: "Olya", status: "I'm sweety", location: { country: "Ukraine", city: "Kiev" } },
        { id: 3,  photoUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU",followed:true, fullName: "Bodya", status: "I'm ganjaman", location: { country: "Ukraine", city: "Kiev" } },
        { id: 4, photoUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS2RbB672nobns-OZRwIUecvBXNYZtZ0dALw&usqp=CAU", followed:false, fullName: "Dimych", status:"I'm boss of boss",location:{country:"Ukraine", city:"Kiev"}} 
    ],
    
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
    userId  })
export const unfollowAC = (userId) => 
({type: UNFOLLOW_USER,userId})
export const setUsersAC = (users) => ({type: SET_USERS,users})
export default usersReducer;
  