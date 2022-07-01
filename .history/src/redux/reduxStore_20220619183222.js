import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./Profile-reducer";
import messageReducer from "./Message-reducer";
import sidebarReducer from "./Sidebar-reducer";


let reducers = combineReducers({
    messagesPage:messageReducer,
    profilePage:profileReducer,
    sidebar:sidebarReducer
})
let store = createStore(reducers);
export default store;