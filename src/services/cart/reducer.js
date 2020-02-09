import  { ADD_TO_CART, CLEAR_CART } from "./actionTypes"

const initialState = {
    cartItems: []
}

export default function cartReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TO_CART:
            let cartItems = [...state.cartItems, action.data];
            return {
                ...state, 
                cartItems
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}