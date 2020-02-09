import gatewayInstance from "../../core/Network/gateway";
import { SET_PRODUCTS } from "./actionTypes";

function setProducts(data) {
    return {
        type: SET_PRODUCTS,
        data: data
    }
}

export function fetchProducts() {
    return (dispatch) => {
        gatewayInstance.get("/products.json").then((res) => {
            dispatch(setProducts(res.data));    
        })
    }
}