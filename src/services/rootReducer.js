import { combineReducers } from "redux";
import sessionReducer from "./session/sessionReducer";
import productsReducer from "./products/reducer";
import cartReducer from "./cart/reducer";


const rootReducer = combineReducers({
    sessionData: sessionReducer,
    products: productsReducer,
    cart: cartReducer
})

export default rootReducer;