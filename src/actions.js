import { ADD_TO_CART, REMOVE_FROM_CART, ADD_DISCOUNT } from './actionTypes';

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function addDiscount(discount) {
    return {
        type: ADD_DISCOUNT,
        discount
    }
}