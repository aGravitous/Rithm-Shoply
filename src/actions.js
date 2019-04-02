import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        item
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}