import { loginActions } from "./sessionActionConstants";
const initialState = {
    isAuthenticated: false
}

export default function sessionReducer(state = initialState, action) {
    switch(action.type) {
        case loginActions.LOGIN_REQUEST_COMPLETE :
        return { ...state, isAuthenticated: action.payload.isAuthenticated };
        default:
        return state;
    }
}