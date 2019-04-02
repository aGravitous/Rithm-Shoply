import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

const INITIAL_STATE = { itemsInCart: [] };

function cartReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, action.item]
            }

        case REMOVE_FROM_CART:
            const itemIdx = state.itemsInCart.findIndex(item => item.id === action.id)

            return {
                ...state,
                itemsInCart: [
                    ...state.itemsInCart.slice(0, itemIdx),
                    ...state.itemsInCart.slice(itemIdx + 1)
                ]
            }

        default:
            return state;
    }
}

export default cartReducer;