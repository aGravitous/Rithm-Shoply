import { ADD_TO_CART, REMOVE_FROM_CART } from './actions';

const INITIAL_STATE = { itemsInCart: [] };

function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                itemsInCart: [...state.itemsInCart, action.item]
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                itemsInCart: state.itemsInCart.filter(
                    item => item.id !== action.id
                )
            }

        default:
            return state;
    }
}

export default cartReducer;