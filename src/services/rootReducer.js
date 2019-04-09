import { combineReducers } from "redux";
import sessionReducer from "./session/sessionReducer";

const rootReducer = combineReducers({
    sessionData: sessionReducer
})

export default rootReducer;