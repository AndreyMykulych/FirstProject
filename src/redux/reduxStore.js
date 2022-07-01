import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./Profile-reducer";
import messageReducer from "./Message-reducer";
import sidebarReducer from "./Sidebar-reducer";
import usersReducer from "./Users-reducer";


let reducers = combineReducers({
    messagesPage:messageReducer,
    profilePage:profileReducer,
    sidebar: sidebarReducer,
    usersPage : usersReducer
})
let store = createStore(reducers);
window.store = store;
export default store;