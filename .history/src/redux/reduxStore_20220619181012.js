import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./Profile-reducer";
import messageReducer from "./Message-reducer";
import sidebarReducer from "./Sidebar-reducer";


let reducers = combineReducers({
    messageReducer,
    profileReducer,
    sidebarReducer
})
let store = createStore(reducers);
export default store;