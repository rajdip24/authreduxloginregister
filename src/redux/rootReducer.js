import { combineReducers } from "redux"; 
import userReducer from "./reducer";


// define rootReducer

const rootReducer =combineReducers({
    // we can access userrReducer with the help of user Key we can access the state
    user:userReducer
})
export default rootReducer;
