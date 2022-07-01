const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';

let initialState = {
    users: [
        { id: 1, followed:true, fullName: "Andrey", status:"I'm boss",location:{country:"Ukraine", city:"Kiev"}},
        { id: 2, followed:false, fullName: "Olya", status: "I'm sweety", location: { country: "Ukraine", city: "Kiev" } },
        { id: 3,  followed:true, fullName: "Bodya", status: "I'm ganjaman", location: { country: "Ukraine", city: "Kiev" } },
        { id: 4,  followed:false, fullName: "Dimych", status:"I'm boss of boss",location:{country:"Ukraine", city:"Kiev"}}
    ],
    
}
export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
           return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === userId) {
                        return (...u, followed: true)
                    }
                    return u;
                })
            }
    
        case UNFOLLOW_USER:
          
            return {}
}
    
}
export const followAC = (userId) => ({
    type: FOLLOW_USER,
    userId: id
})
export const unfollowAC = (userId) => 
({
    type: UNFOLLOW_USER,
    userId: id})
export default usersReducer;
  