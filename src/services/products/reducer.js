import { SET_PRODUCTS } from "./actionTypes";


const initialState = {};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state, productsArray: action.data
            };
        default:
            return state;
    }
}