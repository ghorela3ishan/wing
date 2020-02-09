import  { ADD_TO_CART, CLEAR_CART } from "./actionTypes"

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        data: product
    }
}

export function clearCart() {
    return {
        type: CLEAR_CART
    }
}