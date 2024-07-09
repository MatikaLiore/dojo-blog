import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    auth: userReducer

    //add other reducers if available

})

export default rootReducer;